import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { routes } from './account.routes';
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

const DECLARATIONS = [
    AccountDashboardComponent,
    AccountOrderListComponent,
    AccountOrderDetailComponent,
    AccountAddressBookComponent,
    AccountAddressDetailComponent,
    AccountCustomerDetailsComponent,
    AccountChangeCredentialsComponent,
    RegisterComponent,
    AccountComponent,
    VerifyComponent,
    ResetPasswordComponent,
    ForgottenPasswordComponent,
    ChangeEmailAddressComponent,
];

@NgModule({
    declarations: DECLARATIONS,
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        AccountGuard,
        SignInGuard,
    ],
})
export class AccountModule {
}
