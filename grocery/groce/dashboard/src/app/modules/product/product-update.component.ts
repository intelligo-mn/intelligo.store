import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventManager } from '@devmn/event-manager';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/modules/category/category.service';
import { ICategory } from 'src/app/shared/model/category.model';
import { IProduct } from 'src/app/shared/model/product.model';
import { ProductService } from './product.service';


type SelectableEntity = ICategory;

@Component({
  selector: 'product-update',
  templateUrl: './product-update.component.html',
})
export class ProductUpdateComponent implements OnInit {
  @Input() product: IProduct;
  isSaving = false;
  categories: ICategory[] = [];
  
  editForm = this.fb.group({
    id: [],
    name: [null, [Validators.required]],
    description: [],
    category: [null, Validators.required],
    price: [null, Validators.required],
  });

  constructor(
    protected productService: ProductService,
    protected categoryService: CategoryService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private eventManager: EventManager,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    if (this.product) {
      this.updateForm(this.product);
    }

    this.categoryService.query().subscribe((res: HttpResponse<ICategory[]>) => (this.categories = res.body || []));

  }

  updateForm(product: IProduct): void {
    this.editForm.patchValue({
      id: product.id,
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
    });
  }

  save(): void {
    this.isSaving = true;
    const product = this.editForm.value;
    if (product.id) {
      this.subscribeToSaveResponse(this.productService.update(product));
    } else {
      product.id = undefined;
      this.subscribeToSaveResponse(this.productService.create(product));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IProduct>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.activeModal.close();
    this.eventManager.broadcast('productListModification');
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
