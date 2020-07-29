import { Routes } from '@angular/router';

import { SignInComponent } from '../shared/components/sign-in/sign-in.component';

import { AccountAddressBookComponent } from './components/account-address-book/account-address-book.component';
import { AccountAddressDetailComponent } from './components/account-address-detail/account-address-detail.component';
import { AccountChangeCredentialsComponent } from './components/account-change-credentials/account-change-credentials.component';
import { AccountCustomerDetailsComponent } from './components/account-customer-details/account-customer-details.component';
import { AccountDashboardComponent } from './components/account-dashboard/account-dashboard.component';
import { AccountOrderDetailComponent } from './components/account-order-detail/account-order-detail.component';
import { AccountOrderListComponent } from './components/account-order-list/account-order-list.component';
import { AccountComponent } from './components/account/account.component';
import { ChangeEmailAddressComponent } from './components/change-email-address/change-email-address.component';
import { ForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyComponent } from './components/verify/verify.component';
import { AccountGuard } from './providers/account.guard';
import { SignInGuard } from './providers/sign-in.guard';

export const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                canActivate: [AccountGuard],
                component: AccountDashboardComponent,
            },
            {
                path: 'orders',
                canActivate: [AccountGuard],
                component: AccountOrderListComponent,
            },
            {
                path: 'orders/:code',
                canActivate: [AccountGuard],
                component: AccountOrderDetailComponent,
            },
            {
                path: 'address-book',
                canActivate: [AccountGuard],
                component: AccountAddressBookComponent,
            },
            {
                path: 'address-book/:id',
                canActivate: [AccountGuard],
                component: AccountAddressDetailComponent,
            },
            {
                path: 'details',
                canActivate: [AccountGuard],
                component: AccountCustomerDetailsComponent,
            },
            {
                path: 'change-credentials',
                canActivate: [AccountGuard],
                component: AccountChangeCredentialsComponent,
            },
            {
                path: 'sign-in',
                canActivate: [SignInGuard],
                component: SignInComponent,
            },
            {
                path: 'register',
                canActivate: [SignInGuard],
                component: RegisterComponent,
            },
            {
                path: 'verify',
                canActivate: [SignInGuard],
                component: VerifyComponent,
            },
            {
                path: 'reset-password',
                canActivate: [SignInGuard],
                component: ResetPasswordComponent,
            },
            {
                path: 'forgotten-password',
                canActivate: [SignInGuard],
                component: ForgottenPasswordComponent,
            },
            {
                path: 'change-email-address',
                canActivate: [SignInGuard],
                component: ChangeEmailAddressComponent,
            },
        ],
    },
];
