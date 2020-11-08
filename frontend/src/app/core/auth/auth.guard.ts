import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from './account.service';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountService: AccountService,
    private stateStorageService: StorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const authorities = route.data['authorities'];
    // We need to call the checkLogin / and so the accountService.identity() function, to ensure,
    // that the client has a principal too, if they already logged in by the server.
    // This could happen on a page refresh.
    return this.checkLogin(authorities, state.url);
  }

  checkLogin(authorities: string[], url: string): Observable<boolean> {
    return this.accountService.identity().pipe(
      map(account => {
        
        if (account) {
          const hasAnyAuthority = this.accountService.hasAnyAuthority(authorities);
          if (hasAnyAuthority) {
            debugger;
            return true;

          }
          if (isDevMode()) {
            console.error('User has not any of required authorities: ', authorities);
          }
          
          this.router.navigate(['accessdenied']);
          return false;
        }

        this.stateStorageService.storeUrl(url);
        this.router.navigate(['login']);
        return false;
      })
    );
  }
}
