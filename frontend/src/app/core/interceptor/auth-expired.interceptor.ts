import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { LoginService } from '../login/login.service';
import { StorageService } from '../auth/storage.service';


@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(
    private loginService: LoginService,
    private stateStorageService: StorageService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(null, (err: HttpErrorResponse) => {
        if (err.status === 401 && err.url && !err.url.includes("api/account")) {
          this.stateStorageService.storeUrl(
            this.router.routerState.snapshot.url
          );
          this.loginService.logout();
          this.router.navigate(["login"]);
        }
      })
    );
  }
}
