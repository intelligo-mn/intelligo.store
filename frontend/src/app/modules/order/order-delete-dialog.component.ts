import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IOrder } from 'src/app/shared/model/order.model';
import { OrderService } from './order.service';

@Component({
  templateUrl: './order-delete-dialog.component.html',
})
export class OrderDeleteDialogComponent {
  order?: IOrder;

  constructor(protected orderService: OrderService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.orderService.delete(id).subscribe(() => {
      this.eventManager.broadcast('orderListModification');
      this.activeModal.close();
    });
  }
}
