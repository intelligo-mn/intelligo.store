import { NgModule } from '@angular/core';
import { addNavMenuItem, SharedModule } from '@vendure/admin-ui/core';

/**
 * This module adds the webhook-sections to existing nav
 */
@NgModule({
    imports: [SharedModule],
    providers: [
        addNavMenuItem(
            {
                id: 'webhook',
                label: 'Webhook',
                routerLink: ['/extensions/webhook'],
                icon: 'cloud-traffic',
            },
            'settings',
        ),
    ],
})
export class WebhookNavModule {}
