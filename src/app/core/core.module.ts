import { APP_BASE_HREF } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';

import { AccountLinkComponent } from './components/account-link/account-link.component';
import { AssetGalleryComponent } from './components/asset-gallery/asset-gallery.component';
import { CartDrawerComponent } from './components/cart-drawer/cart-drawer.component';
import { CartToggleComponent } from './components/cart-toggle/cart-toggle.component';
import { CollectionBreadcrumbsComponent } from './components/collection-breadcrumbs/collection-breadcrumbs.component';
import { CollectionsMenuMobileComponent } from './components/collections-menu-mobile/collections-menu-mobile.component';
import { CollectionsMenuComponent } from './components/collections-menu/collections-menu.component';
import { LayoutFooterComponent } from './components/layout/layout-footer.component';
import { LayoutHeaderComponent } from './components/layout/layout-header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MobileMenuToggleComponent } from './components/mobile-menu-toggle/mobile-menu-toggle.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListControlsComponent } from './components/product-list-controls/product-list-controls.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchBarComponent } from './components/product-search-bar/product-search-bar.component';
import { buildIconLibrary } from './icon-library';
import { DefaultInterceptor } from './providers/data/interceptor';

const CORE_COMPONENTS = [
    ProductListComponent,
    ProductDetailComponent,
    CartToggleComponent,
    AccountLinkComponent,
    CartDrawerComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    CollectionsMenuComponent,
    CollectionsMenuMobileComponent,
    MobileMenuToggleComponent,
    ProductCardComponent,
    CollectionBreadcrumbsComponent,
    ProductListControlsComponent,
    ProductSearchBarComponent,
    AssetGalleryComponent,
];

let apolloCache: InMemoryCache;
let providedCacheState: any | undefined;

@NgModule({
    declarations: [
        ...CORE_COMPONENTS,
    ],
    imports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,
        SharedModule,
        BrowserModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
        { provide: APP_BASE_HREF, useValue: environment.baseHref },
        {
            provide: APOLLO_OPTIONS,
            useFactory: apolloOptionsFactory,
            deps: [HttpLink],
        },
    ],
    exports: [
        ...CORE_COMPONENTS,
    ],
})
export class CoreModule {
    constructor(library: FaIconLibrary) {
        buildIconLibrary(library);
    }

    extractState() {
        return apolloCache.extract();
    }

    restoreState(state: any) {
        if (apolloCache) {
            apolloCache.restore(state);
        }
        providedCacheState = state;
    }
}

export function apolloOptionsFactory(httpLink: HttpLink) {
    // Note: the intermediate assignment to `fn` is required to prevent
    // an angular compiler error. See https://stackoverflow.com/a/51977115/772859
    const {apiHost, apiPort, shopApiPath} = environment;
    apolloCache = new InMemoryCache();
    if (providedCacheState) {
        apolloCache.restore(providedCacheState);
    }
    const result = {
        cache: apolloCache,
        link: httpLink.create({
            uri: `${apiHost}:${apiPort}/${shopApiPath}`,
            withCredentials: true,
        }),
    };
    return result;
}
