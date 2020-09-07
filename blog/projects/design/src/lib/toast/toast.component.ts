import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ToastService } from './toast.service';
import { filter, tap, switchMap, takeUntil, repeat } from 'rxjs/operators';
import { Subject, timer } from 'rxjs';

@Component({
  selector: 'niz-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit, OnDestroy {
  toast$ = this.toast.toast;
  onDestroy$ = new Subject();
  constructor(
    private toast: ToastService,
    private el: ElementRef<HTMLElement>
  ) {}
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnInit(): void {
    const hide$ = this.toast$.pipe(filter((options) => !options));
    const show$ = this.toast$.pipe(filter((options) => !!options));

    show$
      .pipe(
        tap((options) =>
          this.el.nativeElement.classList.add('open', options.type)
        ),
        switchMap((options) => timer(options.duration)),
        takeUntil(hide$),
        tap(() => this.hide()),
        repeat(),
        takeUntil(this.onDestroy$)
      )
      .subscribe();

    hide$
      .pipe(tap(() => (this.el.nativeElement.classList.value = '')))
      .subscribe();
  }

  hide() {
    this.toast.hide();
  }
}
