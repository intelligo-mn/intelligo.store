import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, NotificationService, ServerConfigService } from '@vendure/admin-ui/core';

import { getWebhookQuery, updateWebhookMutation } from './queries';

@Component({
    selector: 'greeter',
    templateUrl: './webhook.component.html',
})
export class WebhookComponent implements OnInit {
    webhookForm: FormGroup;

    constructor(
        route: ActivatedRoute,
        router: Router,
        serverConfigService: ServerConfigService,
        private formBuilder: FormBuilder,
        protected dataService: DataService,
        private changeDetector: ChangeDetectorRef,
        private notificationService: NotificationService,
    ) {
        this.webhookForm = this.formBuilder.group({
            url: ['https://example.com', Validators.required],
        });
    }

    async ngOnInit(): Promise<void> {
        await this.dataService
            .query(getWebhookQuery)
            .mapStream((d: any) => d.webhook)
            .subscribe(webhook => this.webhookForm.controls['url'].setValue(webhook));
    }

    async save(): Promise<void> {
        try {
            if (this.webhookForm.dirty) {
                const formValue = this.webhookForm.value;
                await this.dataService.mutate(updateWebhookMutation, { url: formValue.url }).toPromise();
            }
            this.webhookForm.markAsPristine();
            this.changeDetector.markForCheck();
            this.notificationService.success('common.notify-update-success', {
                entity: 'Webhook',
            });
        } catch (e) {
            this.notificationService.error('common.notify-update-error', {
                entity: 'Webhook',
            });
        }
    }
}
