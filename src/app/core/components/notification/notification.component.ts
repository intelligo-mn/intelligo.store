import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output } from '@angular/core';

import { NOTIFICATION_OPTIONS, NotificationOptions } from '../../providers/notification/notification-types';

@Component({
    selector: 'vsf-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
    @Output() close = new EventEmitter<void>();
    constructor(@Inject(NOTIFICATION_OPTIONS) public options: NotificationOptions) { }
}
