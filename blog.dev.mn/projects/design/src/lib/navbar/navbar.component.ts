import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { fromEvent, Subject, Observable } from 'rxjs';
import {
  takeUntil,
  map,
  tap,
  share,
  pairwise,
  withLatestFrom,
} from 'rxjs/operators';

@Component({
  selector: 'niz-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject();
  hidden$: Observable<boolean>;

  constructor(private el: ElementRef) {}

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnInit(): void {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      map((ev) => document.getElementsByTagName('html')[0].scrollTop),
      share()
    );

    const $direction = scroll$.pipe(
      pairwise(),
      map(([s1, s2]) => (s1 < s2 ? 'DOWN' : 'UP'))
    );

    scroll$
      .pipe(
        withLatestFrom($direction),
        map(([top, direction]) => top > 128 && direction === 'DOWN'),
        tap((hidden) =>
          hidden
            ? (this.el.nativeElement as HTMLElement).classList.add('out')
            : (this.el.nativeElement as HTMLElement).classList.remove('out')
        ),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }
}
