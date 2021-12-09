import { InjectionToken, TemplateRef } from '@angular/core';

export type NotificationType = 'error' | 'success' | 'info';

export interface NotificationOptions {
    type: NotificationType;
    title: string;
    duration: number;
    /**
     * A simple string message for the notification.
     */
    message?: string;
    /**
     * A TemplateRef to embed in the notification. Useful
     * when the notification needs to display something more
     * complex than a string message.
     */
    templateRef?: TemplateRef<any>;
    /**
     * An optional context to pass to the templateRef. In addition to
     * any variables defined, an additional `closeFn` will be automatically
     * defined, which is a function which can be used to close the
     * notification from within the template.
     */
    templateContext?: any;
}

export const NOTIFICATION_OPTIONS = new InjectionToken<NotificationOptions>('NOTIFICATION_OPTIONS');
