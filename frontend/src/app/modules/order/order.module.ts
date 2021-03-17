import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderListAllComponent } from './components/order-list-all/order-list-all.component';
import { OrderListDateComponent } from './components/order-list-date/order-list-date.component';
import { OrderListManagerComponent } from './components/order-list-manager/order-list-manager.component';
import { OrderListProductComponent } from './components/order-list-product/order-list-product.component';
import { OrderDeleteDialogComponent } from './order-delete-dialog.component';
import { OrderFormComponent } from './order-form.component';
import { OrderListComponent } from './order-list.component';
import { OrderPackSelectComponent } from './order-pack-select.component';
import { orderRoute } from './order.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(orderRoute)],
  declarations: [
    OrderListComponent,
    OrderPackSelectComponent,
    OrderFormComponent,
    OrderDeleteDialogComponent,
    OrderListComponent,
    OrderListAllComponent,
    OrderListDateComponent,
    OrderListManagerComponent,
    OrderListProductComponent,
  ],
  entryComponents: [OrderDeleteDialogComponent],
})
export class ChildfoodOrderModule { }
