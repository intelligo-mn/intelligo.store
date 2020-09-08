import { ScullyContentService } from '@services/scully-content.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ScullyRoute } from '@scullyio/ng-lib';
import { tap, takeUntil } from 'rxjs/operators';

interface Breadcrumb {
  text: string;
  url: string;
}

interface RoutePattern {
  pattern: RegExp;
  text: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  private breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  breadcrumbs = this.breadcrumbs$.asObservable();

  private destroy$ = new Subject();

  constructor(private router: Router, private content: ScullyContentService) {}

  ngOnInit() {
    this.content
      .getCurrent()
      .pipe(
        takeUntil(this.destroy$),
        tap((currentPage) => {
          this.breadcrumbs$.next(
            this.getBreadcrumbsWithStartPage(this.router.url, currentPage)
          );
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getBreadcrumbsWithStartPage(
    root: string,
    currentPage: ScullyRoute
  ): Breadcrumb[] {
    const breadcrumbs = this.getBreadcrumbs(root, currentPage);
    breadcrumbs.unshift({
      url: '',
      text: 'dev.mn',
    });
    return breadcrumbs;
  }

  private getBreadcrumbs(
    root: string,
    currentPage: ScullyRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ) {
    if (root.indexOf('/') === -1) {
      return breadcrumbs;
    }

    root = root.substring(root.indexOf('/') + 1);

    url += `/${this.removeHashtag(root.split('/')[0])}`;
    if (currentPage.route === url) {
      breadcrumbs.push({
        text: currentPage.title,
        url,
      });
    }

    const routePattern = this.getMachtingRoute(url);
    if (routePattern) {
      breadcrumbs.push({
        text: routePattern.text,
        url,
      });
    }

    return this.getBreadcrumbs(root, currentPage, url, breadcrumbs);
  }

  private removeHashtag(route: string): string {
    const hashtagIndex = route.indexOf('#');
    if (hashtagIndex > -1) {
      return route.substring(0, hashtagIndex);
    }
    return route;
  }

  private getMachtingRoute(url: string): RoutePattern {
    return this.routePatterns().find((routePattern) =>
      routePattern.pattern.test(url)
    );
  }

  private routePatterns(): RoutePattern[] {
    return [
      {
        pattern: /^\/blog$/,
        text: 'blog',
      },
      {
        pattern: /^\/authors$/,
        text: 'authors',
      },
      {
        pattern: /^\/tags$/,
        text: 'tags',
      },
      {
        pattern: /^\/links$/,
        text: 'links',
      },
    ];
  }
}
