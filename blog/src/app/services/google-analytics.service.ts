import { Injectable, OnDestroy } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter, tap, takeUntil, skipWhile } from "rxjs/operators";
import { Subject } from "rxjs";
import { environment } from "@environments/environment";
declare let gtag;

@Injectable({
  providedIn: "root",
})
export class GoogleAnalyticsService implements OnDestroy {
  onDestroy$ = new Subject();

  constructor(private router: Router) {
    this.router.events
      .pipe(
        skipWhile(() => !environment.production || window.location.hostname === 'localhost'),
        filter((event) => event instanceof NavigationEnd),
        tap((event: NavigationEnd) =>
          gtag("config", "UA-56561079-5", {
            page_path: event.urlAfterRedirects,
          })
        ),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public trigger(
    eventName: string,
    eventCategory: string,
    eventLabel: string = null,
    eventValue: number = null
  ) {
    if (!environment.production || window.location.hostname === 'localhost') {
      console.warn("not triggering analytics event from localhost");
      console.log({ eventName, eventCategory, eventLabel, eventValue });
      return;
    }
    gtag("event", eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
    });
  }

  ref(ref: string) {
    this.trigger("External Link click", "engagement", ref);
  }
}
