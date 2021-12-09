import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { race, timer } from 'rxjs';
import { finalize, mapTo, take } from 'rxjs/operators';

import { NotificationComponent } from '../../components/notification/notification.component';

import { NOTIFICATION_OPTIONS, NotificationOptions } from './notification-types';

/**
 * This service is responsible for instantiating a ModalDialog component and
 * embedding the specified component within.
 */
@Injectable({providedIn: 'root'})
export class NotificationService {
    constructor(private overlay: Overlay, private injector: Injector) {
    }

    /**
     * Display a "toast" notification.
     */
    notify(options: NotificationOptions) {
        const positionStrategy = this.overlay.position().global().top('16px').right('16px');
        const scrollStrategy = this.overlay.scrollStrategies.noop();
        const overlayRef = this.overlay.create(
            new OverlayConfig({
                scrollStrategy,
                positionStrategy,
                hasBackdrop: false,
            }),
        );
        const closeFn = () => {
            if (overlayRef.hasAttached()) {
                const notificationEl = overlayRef.overlayElement.querySelector('vsf-notification');
                if (notificationEl) {
                    notificationEl.classList.add('remove');
                }
                setTimeout(() => overlayRef.dispose(), 250);
            }
        };

        const portal = new ComponentPortal(
            NotificationComponent,
            null,
            this.createInjector(options, closeFn),
        );
        const notificationRef = overlayRef.attach(portal);

        return race<any>(notificationRef.instance.close, timer(options.duration)).pipe(
            take(1),
            finalize(() => closeFn()),
        );
    }

    error(message: string) {
        return this.notify({
            title: 'An error occurred',
            message,
            duration: 10000,
            type: 'error',
        });
    }

    success(message: string) {
        return this.notify({
            title: 'Success',
            message,
            duration: 5000,
            type: 'error',
        });
    }

    info(message: string) {
        return this.notify({
            title: 'Information',
            message,
            duration: 5000,
            type: 'info',
        });
    }

    private createInjector(options: NotificationOptions, closeFn: () => void): PortalInjector {
        options.templateContext = {
            ...options.templateContext,
            closeFn,
        };
        const weakMap = new WeakMap<any, any>([[NOTIFICATION_OPTIONS, options]]);
        return new PortalInjector(this.injector, weakMap);
    }
}
