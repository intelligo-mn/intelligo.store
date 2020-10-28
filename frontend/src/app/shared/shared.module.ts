import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AmountComponent } from './components/amount/amount.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { LocationComponent } from './components/location/location.component';
import { PaymentComponent } from './components/payment/payment.component';
@NgModule({
  entryComponents: [],
  declarations: [PaymentComponent, CustomerComponent, DatatableComponent, LocationComponent, FormHeaderComponent, AmountComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    NgSelectModule,
    NgOptionHighlightModule,
    NgxDatatableModule.forRoot({
      messages: {
        selectedMessage: 'Сонгосон өгөгдөл',
        emptyMessage: 'Хоосон байна',
        totalMessage: 'Нийт',
      },
    }),
    NgbPaginationModule,
  ],
  exports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    NgOptionHighlightModule,
    NgxDatatableModule,
    NgbPaginationModule,
    PaymentComponent,
    FormHeaderComponent,
    AmountComponent,
    DatatableComponent,
  ],
})
export class SharedModule {}
