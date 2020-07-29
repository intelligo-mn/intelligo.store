import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DialogButtonsDirective } from '../core/components/modal-dialog/dialog-buttons.directive';
import { DialogComponentOutletComponent } from '../core/components/modal-dialog/dialog-component-outlet.component';
import { DialogTitleDirective } from '../core/components/modal-dialog/dialog-title.directive';
import { ModalDialogComponent } from '../core/components/modal-dialog/modal-dialog.component';
import { NotificationComponent } from '../core/components/notification/notification.component';

import { AddressCardComponent } from './components/address-card/address-card.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AddressModalComponent } from './components/address-modal/address-modal.component';
import { CartContentsComponent } from './components/cart-contents/cart-contents.component';
import { CenteredCardComponent } from './components/centered-card/centered-card.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';
import { DropdownContentDirective } from './components/dropdown/dropdown-content.directive';
import { DropdownTriggerDirective } from './components/dropdown/dropdown-trigger.directive';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AssetPreviewPipe } from './pipes/asset-preview.pipe';
import { FormatPricePipe } from './pipes/format-price.pipe';
import { ProductUrlPipe } from './pipes/product-url.pipe';

const SHARED_DECLARATIONS = [
    CartContentsComponent,
    AddressCardComponent,
    SignInComponent,
    AddressFormComponent,
    CenteredCardComponent,
    DropdownComponent,
    DropdownTriggerDirective,
    DropdownContentDirective,
    DialogButtonsDirective,
    DialogTitleDirective,
    DialogComponentOutletComponent,
    ModalDialogComponent,
    AddressModalComponent,
    CollectionCardComponent,
    NotificationComponent,
    FormatPricePipe,
    ProductUrlPipe,
    AssetPreviewPipe,
];

const IMPORTS = [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    RouterModule,
];

@NgModule({
    declarations: SHARED_DECLARATIONS,
    imports: IMPORTS,
    exports: [...IMPORTS, ...SHARED_DECLARATIONS],
})
export class SharedModule {
}
