import { DOCUMENT } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, makeStateKey, TransferState } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterModule, UrlSerializer } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

const STATE_KEY = makeStateKey<any>('apollo.state');

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        BrowserTransferStateModule,
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled', initialNavigation: 'enabled'}),
        CoreModule,
        SharedModule,
        ServiceWorkerModule.register('/storefront/ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWithDelay:5000',
        }),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {

    constructor(
        private coreModule: CoreModule,
        private readonly transferState: TransferState,
        private router: Router,
        private urlSerializer: UrlSerializer,
        @Inject(DOCUMENT) private document?: Document,
    ) {
        const isBrowser = this.transferState.hasKey<any>(STATE_KEY);

        if (isBrowser) {
            this.onBrowser();
        } else {
            this.onServer();
        }

        this.handleScrollOnNavigations();
    }

    onServer() {
        this.transferState.onSerialize(STATE_KEY, () => {
            const state = this.coreModule.extractState();
            return state;
        });
    }

    onBrowser() {
        const state = this.transferState.get<any>(STATE_KEY, null);
        this.coreModule.restoreState(state);
    }

    /**
     * A work-around for undesirable scoll behaviour caused by the router's `scrollPositionRestoration` setting.
     * When set to 'enabled', it correctly handles scrolling to the top on navigation, and preserving scroll position
     * on "back" navigation. However, it _also_ causes the page to scroll to the top when changing search facet value filters,
     * which is very undesirable. Since there seems to be currently no way to disable the scrolling on a per-navigation basis,
     * we are manually implementing scroll-to-top-on-nav and adding an exception for when the "facets" param of the "category"
     * routes change.
     */
    private handleScrollOnNavigations() {
        this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        ).subscribe(event => {
            if (this.document && this.document.defaultView) {
                const parsed = this.urlSerializer.parse(event.urlAfterRedirects);
                const primaryRoot = parsed.root.children.primary;
                const isFacetFilterNavigation = (primaryRoot?.segments[0]?.path === 'category' &&
                    primaryRoot?.segments[1]?.parameterMap.has('facets'));

                if (!isFacetFilterNavigation) {
                    this.document.defaultView.scrollTo({
                        top: 0,
                    });
                }
            }
        });
    }
}
