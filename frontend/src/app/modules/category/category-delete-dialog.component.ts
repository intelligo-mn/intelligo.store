import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICategory } from 'src/app/shared/model/category.model';
import { CategoryService } from './category.service';

@Component({
  templateUrl: './category-delete-dialog.component.html'
})
export class CategoryDeleteDialogComponent {
  category?: ICategory;

  constructor(protected categoryService: CategoryService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.categoryService.delete(id).subscribe(() => {
      this.eventManager.broadcast('categoryListModification');
      this.activeModal.close();
    });
  }
}
