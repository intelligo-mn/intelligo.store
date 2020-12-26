import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import locale from '@angular/common/locales/en';
import { LOCALE_ID, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbDateAdapter, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { CookieModule } from 'ngx-cookie';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgbDateMomentAdapter } from '../shared/util/datepicker-adapter';
import { AuthExpiredInterceptor } from './interceptor/auth-expired.interceptor';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ErrorHandlerInterceptor } from './interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './interceptor/notification.interceptor';

@NgModule({
  imports: [HttpClientModule, CookieModule.forRoot(), NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-' })],
  providers: [
    Title,
    {
      provide: LOCALE_ID,
      useValue: 'en',
    },
    { provide: NgbDateAdapter, useClass: NgbDateMomentAdapter },
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
export class ChildfoodCoreModule {
  constructor(dpConfig: NgbDatepickerConfig) {
    registerLocaleData(locale);
    dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
  }
}
