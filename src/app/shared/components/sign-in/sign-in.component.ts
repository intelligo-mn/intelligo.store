import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SignIn } from '../../../common/generated-types';
import { DataService } from '../../../core/providers/data/data.service';
import { StateService } from '../../../core/providers/state/state.service';

import { SIGN_IN } from './sign-in.graphql';

@Component({
    selector: 'vsf-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
    @Input() navigateToOnSuccess: any[] | undefined;
    @Input() displayRegisterLink = true;

    emailAddress: string;
    password: string;
    rememberMe = false;
    invalidCredentials = false;

    constructor(private dataService: DataService,
                private stateService: StateService,
                private router: Router,
                private changeDetector: ChangeDetectorRef) {}

    signIn() {
        this.dataService.mutate<SignIn.Mutation, SignIn.Variables>(SIGN_IN, {
            emailAddress: this.emailAddress,
            password: this.password,
            rememberMe: this.rememberMe,
        }).subscribe({
            next: data => {
                this.stateService.setState('signedIn', true);
                const commands = this.navigateToOnSuccess || ['/'];
                this.router.navigate(commands);
            },
            error: err => {
                if (err.graphQLErrors && err.graphQLErrors[0]) {
                    const code = err.graphQLErrors[0].extensions.code;
                    if (code === 'UNAUTHORIZED') {
                        this.invalidCredentials = true;
                        this.changeDetector.markForCheck();
                    }
                }
            },
        });
    }
}
