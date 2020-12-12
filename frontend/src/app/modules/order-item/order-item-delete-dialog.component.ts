import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IOrderItem } from 'src/app/shared/model/order-item.model';
import { OrderItemService } from './order-item.service';

@Component({
  templateUrl: './order-item-delete-dialog.component.html'
})
export class OrderItemDeleteDialogComponent {
  orderItem?: IOrderItem;

  constructor(protected orderItemService: OrderItemService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.orderItemService.delete(id).subscribe(() => {
      this.eventManager.broadcast('orderItemListModification');
      this.activeModal.close();
    });
  }
}
