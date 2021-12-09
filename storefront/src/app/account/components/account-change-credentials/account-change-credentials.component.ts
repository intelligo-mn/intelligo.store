import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ChangeEmailAddress, ChangePassword } from '../../../common/generated-types';
import { DataService } from '../../../core/providers/data/data.service';

import { CHANGE_EMAIL_ADDRESS, CHANGE_PASSWORD } from './account-change-credentials.graphql';

@Component({
    selector: 'vsf-account-change-credentials',
    templateUrl: './account-change-credentials.component.html',
    styleUrls: ['./account-change-credentials.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountChangeCredentialsComponent {
    currentPassword = '';
    newPassword = '';
    password = '';
    emailAddress = '';
    changeEmailAddressMessage = '';

    constructor(private dataService: DataService, private changeDetectorRef: ChangeDetectorRef) { }

    changePassword() {
        this.dataService.mutate<ChangePassword.Mutation, ChangePassword.Variables>(CHANGE_PASSWORD, {
            old: this.currentPassword,
            new: this.newPassword,
        })
            .subscribe(() => {
                this.currentPassword = '';
                this.newPassword = '';
                this.changeDetectorRef.markForCheck();
            });
    }

    changeEmailAddress() {
        this.dataService.mutate<ChangeEmailAddress.Mutation, ChangeEmailAddress.Variables>(CHANGE_EMAIL_ADDRESS, {
            password: this.password,
            emailAddress: this.emailAddress,
        })
            .subscribe(() => {
                this.changeEmailAddressMessage = `To complete the process, please check your email (${this.emailAddress}) to verify the address.`;
                this.password = '';
                this.emailAddress = '';
                this.changeDetectorRef.markForCheck();
            });
    }
}
