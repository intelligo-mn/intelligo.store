import { ScullyContentService } from '@services/scully-content.service';
import {
  Component,
  OnInit,
  Inject,
  OnDestroy,
  HostBinding,
} from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';
import { fromEvent, Subject, Observable, merge } from 'rxjs';
import { tap, map, takeUntil, switchMap, withLatestFrom } from 'rxjs/operators';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'niz-toc',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
})
export class TableOfContentsComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject();
  headers$: Observable<Element[]>;

  @HostBinding('class') get classes(): string {
    return 'block';
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public scully: ScullyRoutesService,
    public content: ScullyContentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.headers$ = fromEvent(window, 'AngularReady').pipe(
      map((ev) =>
        Array.from(this.document.querySelectorAll('.post h2,.post h3'))
      )
    );

    fromEvent(window, 'AngularReady')
      .pipe(
        switchMap((ev) => this.route.fragment),
        switchMap((fragment) =>
          this.content.getCurrent().pipe(map((c) => [fragment, c.route]))
        ),
        tap(([fragment, route]) => this.scrollTo(route, fragment)),
        takeUntil(this.onDestroy$)
      )
      .subscribe();

    const isVisible = (element: Element) => {
      const subject = new Subject<Element>();
      const observer = new IntersectionObserver((entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((e) => subject.next(element));
      });
      observer.observe(element);

      return subject.pipe(
        takeUntil(
          this.onDestroy$.pipe(
            tap(() => {
              observer.disconnect();
            })
          )
        )
      );
    };

    this.headers$
      .pipe(
        switchMap((headers) => merge(...headers.map((h) => isVisible(h)))),
        switchMap((el) =>
          this.content.getCurrent().pipe(map((c) => [el.id, c.route]))
        ),
        tap(([el, route]) => this.location.replaceState(`${route}#${el}`)),
        takeUntil(this.onDestroy$)
      )
      .subscribe();

    this.headers$
      .pipe(
        switchMap((anchors) =>
          merge(
            ...anchors.map((a) =>
              fromEvent(a, 'click').pipe(
                switchMap((ev) =>
                  this.content.getCurrent().pipe(map((c) => [a.id, c.route]))
                )
              )
            )
          )
        ),
        tap(([id, route]) => this.scrollTo(route, id)),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  scrollTo(url: string, id: string) {
    this.location.replaceState(`${url}#${id}`);
    this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  active(url: string, id: string) {
    return this.location.path(true) === `${url}#${id}` ? 'active' : '';
  }

  scrollToTop(url: string) {
    this.location.replaceState(`${url}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToRelated() {
    const stack = Array.from(
      this.document.getElementsByTagName('app-card-stack')
    )[0];
    stack?.scrollIntoView({ behavior: 'smooth' });
  }

  headerClasses(header: string): string {
    if (header === 'h2') {
      return 'text-lg text-semibold';
    } else if (header === 'h3') {
      return 'text-base';
    }
  }
}
