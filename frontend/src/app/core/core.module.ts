import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { NgbDateAdapter, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { locale } from 'moment';
import { fontAwesomeIcons } from './icons/font-awesome-icons';
import { AuthExpiredInterceptor } from './interceptor/auth-expired.interceptor';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ErrorHandlerInterceptor } from './interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './interceptor/notification.interceptor';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  imports: [HttpClientModule, CookieModule.forRoot()],
  providers: [
    Title,
    {
      provide: LOCALE_ID,
      useValue: 'en',
    },
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true,
    },
  ],
})
export class ForumCoreModule {
  constructor() {
    registerLocaleData(locale);
  }
}
