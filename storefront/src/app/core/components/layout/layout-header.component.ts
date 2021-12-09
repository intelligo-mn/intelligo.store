import { isPlatformBrowser } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    OnDestroy,
    PLATFORM_ID,
    ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { bufferTime, filter, map } from 'rxjs/operators';

@Component({
    selector: 'vsf-layout-header',
    template: `<div class="floating-container" #floatingContainer><ng-content></ng-content></div>`,
    styleUrls: ['./layout-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHeaderComponent implements AfterViewInit, OnDestroy {

    @HostBinding('class.floating')
    floating = false;

    @HostBinding('style.height.px')
    headerHeight: number | null;

    @ViewChild('floatingContainer', { static: true })
    private floatingContainer: ElementRef<HTMLDivElement>;

    private subscription: Subscription;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {}

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.setUpScrollHandler(window);
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private setUpScrollHandler(_window: Window) {
        this.subscription = fromEvent(_window, 'scroll').pipe(
            map(() => _window.scrollY),
            bufferTime(250),
            filter(val => 1 < val.length),
            map(val => val[val.length - 1] - val[0]),
        ).subscribe((val) => {
            if (_window.scrollY === 0) {
                this.setFloating(false);
            } else if (0 < val) {
                this.setFloating(false);
            } else if (val < -50 && 300 < _window.scrollY) {
                this.setFloating(true);
            }
        });
    }

    private setFloating(isFloating: boolean) {
        this.floating = isFloating;
        this.headerHeight = this.floatingContainer.nativeElement.offsetHeight;
    }
}
