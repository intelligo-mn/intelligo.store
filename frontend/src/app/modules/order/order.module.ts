import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { OrderComponent } from './order.component';
import { OrderPackSelectComponent } from './order-pack-select.component';
import { OrderUpdateComponent } from './order-update.component';
import { OrderDeleteDialogComponent } from './order-delete-dialog.component';
import { orderRoute } from './order.route';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderListDateComponent } from './components/order-list-date/order-list-date.component';
import { OrderListManagerComponent } from './components/order-list-manager/order-list-manager.component';
import { OrderListProductComponent } from './components/order-list-product/order-list-product.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(orderRoute)],
  declarations: [
    OrderComponent,
    OrderPackSelectComponent,
    OrderUpdateComponent,
    OrderDeleteDialogComponent,
    OrderListComponent,
    OrderListDateComponent,
    OrderListManagerComponent,
    OrderListProductComponent,
  ],
  entryComponents: [OrderDeleteDialogComponent],
})
export class ChildfoodOrderModule {}
