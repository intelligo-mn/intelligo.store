import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { addNavMenuItem, addNavMenuSection, SharedModule } from '@vendure/admin-ui/core';

import { WebhookComponent } from './webhook.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: WebhookComponent,
                data: { breadcrumb: 'Webhook' },
            },
        ]),
    ],
    providers: [
        addNavMenuItem(
            {
                id: 'webhook',
                label: 'Webhook',
                routerLink: ['/extensions/webhook'],
                icon: 'cursor-hand-open',
            },
            'settings',
        ),
    ],
    declarations: [WebhookComponent],
})
export class WebhookModule {}
