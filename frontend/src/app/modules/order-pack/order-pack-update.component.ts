import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'src/app/shared/constants/input.constants';

import { IOrderPack, IOrderPackItem, OrderPack } from 'src/app/shared/model/order-pack.model';
import { OrderPackService } from './order-pack.service';
import { IProduct } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/modules/product/product.service';
import { CategoryService } from '../category/category.service';
import { Category, ICategory } from 'src/app/shared/model/category.model';

@Component({
  selector: 'order-pack-update',
  templateUrl: './order-pack-update.component.html',
  styleUrls: ['./order-pack.component.scss'],
})
export class OrderPackUpdateComponent implements OnInit {
  isSaving = false;
  products: IProduct[] = [];
  categories: ICategory[] = [];
  active: any = 'ngb-nav-0';
  editForm = this.fb.group({
    id: [],
    name: [null, [Validators.required]],
    startDate: [null, [Validators.required]],
    endDate: [null, [Validators.required]],
    status: [null, [Validators.required]],
    categories: this.fb.array([]),
  });

  constructor(
    protected orderPackService: OrderPackService,
    protected productService: ProductService,
    protected categoryService: CategoryService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ orderPack }) => {
      if (!orderPack.id) {
        const today = moment().startOf('day');
        orderPack.startDate = today;
        orderPack.endDate = today;
      }

      this.categoryService.query().subscribe((res: HttpResponse<IProduct[]>) => {
        this.categories = res.body || [];
        this.productService.query().subscribe(
          (res: HttpResponse<IProduct[]>) => {
            this.products = res.body || [];
            this.categories.unshift({
              ...new Category(),
              id: 0,
              name: 'Бүх бүтээгдэхүүн',
              products: this.products,
            });
          },
          (error: any) => {},
          () => {
            this.categories.forEach(item => {
              this.getProduct(item).then(res => {
                item.products = res;
                const prodControls: AbstractControl[] = [];
                item.products?.forEach(prod => {
                  const pItem = this.fb.group({
                    id: [prod.id],
                    name: [prod.name],
                    active: [false, [Validators.required]],
                    comment: [null, [Validators.required]],
                  });
                  prodControls.push(pItem);
                });
                this.formArray.push(
                  this.fb.group({
                    id: [item.id],
                    name: [item.name, [Validators.required]],
                    products: new FormArray(prodControls),
                  })
                );
              });
            });
          }
        );
      });
    });
  }

  updateForm(orderPack: IOrderPack): void {
    this.editForm.patchValue({
      id: orderPack.id,
      name: orderPack.name,
      startDate: orderPack.startDate ? orderPack.startDate.format(DATE_TIME_FORMAT) : null,
      endDate: orderPack.endDate ? orderPack.endDate.format(DATE_TIME_FORMAT) : null,
      status: orderPack.status,
      categories: this.fb.array([]),
    });
  }

  initItemRows(): FormGroup {
    return this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      products: this.fb.array([
        this.fb.group({
          id: [null],
          name: [null, [Validators.required]],
          active: [false, [Validators.required]],
          comment: [null, [Validators.required]],
        }),
      ]),
    });
  }

  get formArray(): FormArray {
    return this.editForm.get('categories') as FormArray;
  }

  previousState(): void {
    window.history.back();
  }

  getProduct(category: ICategory): Promise<IProduct[]> {
    return new Promise((resolve, reject) => {
      if (category?.products?.length > 0) {
        resolve(category.products);
      }
      const pro = this.products.filter(item => item.category?.id == category?.id);
      resolve(pro);
    });
  }

  save(): void {
    this.isSaving = true;
    const orderPack: IOrderPack | any = this.editForm.value;
    orderPack.products = new Set();
    orderPack.categories.forEach((item: ICategory) => {
      orderPack.products = [...orderPack.products, ...item.products];
    });
    orderPack.products = orderPack.products.filter(
      (thing, index, self) => index === self.findIndex(t => t.id === thing.id && t.active === true)
    );
    debugger;
    if (orderPack.id) {
      this.subscribeToSaveResponse(this.orderPackService.update(orderPack));
    } else {
      orderPack.id = undefined;
      this.subscribeToSaveResponse(this.orderPackService.create(orderPack));
    }
  }

  // private createFromForm(): IOrderPack {
  //   return {
  //     ...new OrderPack(),
  //     id: this.editForm.get(['id'])!.value,
  //     name: this.editForm.get(['name'])!.value,
  //     startDate: this.editForm.get(['startDate'])!.value ? moment(this.editForm.get(['startDate'])!.value, DATE_TIME_FORMAT) : undefined,
  //     endDate: this.editForm.get(['endDate'])!.value ? moment(this.editForm.get(['endDate'])!.value, DATE_TIME_FORMAT) : undefined,
  //     status: this.editForm.get(['status'])!.value,
  //     products: null,
  //   };
  // }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrderPack>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: IProduct): any {
    return item.id;
  }
}
