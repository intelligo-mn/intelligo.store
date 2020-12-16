import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IOrderPack } from 'src/app/shared/model/order-pack.model';
import { OrderPackService } from './order-pack.service';

@Component({
  templateUrl: './order-pack-delete-dialog.component.html',
})
export class OrderPackDeleteDialogComponent {
  orderPack?: IOrderPack;

  constructor(protected orderPackService: OrderPackService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.orderPackService.delete(id).subscribe(() => {
      this.eventManager.broadcast('orderPackListModification');
      this.activeModal.close();
    });
  }
}
