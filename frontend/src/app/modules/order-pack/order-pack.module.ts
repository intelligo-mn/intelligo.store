import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderPackDeleteDialogComponent } from './order-pack-delete-dialog.component';
import { OrderPackDetailComponent } from './order-pack-detail.component';
import { OrderPackUpdateComponent } from './order-pack-update.component';
import { OrderPackComponent } from './order-pack.component';
import { orderPackRoute } from './order-pack.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(orderPackRoute)],
  declarations: [OrderPackComponent, OrderPackDetailComponent, OrderPackUpdateComponent, OrderPackDeleteDialogComponent],
  entryComponents: [OrderPackDeleteDialogComponent],
  exports: [SharedModule]
})
export class OrderPackModule {}
