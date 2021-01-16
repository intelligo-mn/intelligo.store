import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { OrderComponent } from './order.component';
import { OrderPackSelectComponent } from './order-pack-select.component';
import { OrderUpdateComponent } from './order-update.component';
import { OrderDeleteDialogComponent } from './order-delete-dialog.component';
import { orderRoute } from './order.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(orderRoute)],
  declarations: [OrderComponent, OrderPackSelectComponent, OrderUpdateComponent, OrderDeleteDialogComponent],
  entryComponents: [OrderDeleteDialogComponent],
})
export class ChildfoodOrderModule {}
