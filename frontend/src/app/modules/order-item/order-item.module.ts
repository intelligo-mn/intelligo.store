import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { OrderItemComponent } from './order-item.component';
import { OrderItemDetailComponent } from './order-item-detail.component';
import { OrderItemUpdateComponent } from './order-item-update.component';
import { OrderItemDeleteDialogComponent } from './order-item-delete-dialog.component';
import { orderItemRoute } from './order-item.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(orderItemRoute)],
  declarations: [OrderItemComponent, OrderItemDetailComponent, OrderItemUpdateComponent, OrderItemDeleteDialogComponent],
  entryComponents: [OrderItemDeleteDialogComponent]
})
export class ChildfoodOrderItemModule {}
