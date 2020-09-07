import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Injectable({ providedIn: 'root' })
export class IsAvailable implements CanActivate {
  constructor(private routes: ScullyRoutesService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const url = getResolvedUrl(route);
    return this.routes.available$.pipe(
      map(
        posts =>
          posts.some(p => p.route === url) || this.router.parseUrl('/404')
      )
    );
  }
}

function getResolvedUrl(route: ActivatedRouteSnapshot): string {
  return route.pathFromRoot
    .map(v => v.url.map(segment => segment.toString()).join('/'))
    .join('/');
}

function getConfiguredUrl(route: ActivatedRouteSnapshot): string {
  return (
    '/' +
    route.pathFromRoot
      .filter(v => v.routeConfig)
      .map(v => v.routeConfig!.path)
      .join('/')
  );
}
