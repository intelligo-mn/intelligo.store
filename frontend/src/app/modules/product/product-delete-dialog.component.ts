import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IProduct } from 'src/app/shared/model/product.model';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-delete-dialog.component.html'
})
export class ProductDeleteDialogComponent {
  product?: IProduct;

  constructor(protected productService: ProductService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.productService.delete(id).subscribe(() => {
      this.eventManager.broadcast('productListModification');
      this.activeModal.close();
    });
  }
}
