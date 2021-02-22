import { Component, Input, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICategory, Category } from 'src/app/shared/model/category.model';
import { CategoryService } from './category.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventManager } from '@devmn/event-manager';

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
})
export class CategoryUpdateComponent implements OnInit {
  @Input() category: ICategory;

  isSaving = false;

  categoryForm = this.fb.group({
    id: [],
    name: [null, [Validators.required]],
    description: [],
  });

  constructor(
    protected categoryService: CategoryService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private eventManager: EventManager
  ) {}

  ngOnInit(): void {
    if (this.category) {
      this.categoryForm.patchValue(this.category);
    }
  }

  save(): void {
    this.isSaving = true;
    const category = this.categoryForm.value;
    if (category.id) {
      this.subscribeToSaveResponse(this.categoryService.update(category));
    } else {
      category.id = undefined;
      this.subscribeToSaveResponse(this.categoryService.create(category));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICategory>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.eventManager.broadcast('categoryListModification');
    this.activeModal.close();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
