import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRestaurantComponent } from './home-restaurant/home-restaurant.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeListComponent } from './home-list/home-list.component';
import { DetailComponent } from './home-list/detail/detail.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { AddressComponent } from './address/address.component';

export const HttpFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http);
};

@NgModule({
  declarations: [
    AppComponent,
    HomeRestaurantComponent,
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeListComponent,
    DetailComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'jp',
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
