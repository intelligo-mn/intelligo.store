import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/modules/product/product.service';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'src/app/shared/constants/input.constants';
import { Category, ICategory } from 'src/app/shared/model/category.model';
import { IOrderPack } from 'src/app/shared/model/order-pack.model';
import { IProduct } from 'src/app/shared/model/product.model';
import { CategoryService } from '../category/category.service';
import { OrderPackService } from './order-pack.service';

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
            if (orderPack.id) {
              this.patchValues(orderPack);
            }
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
                    active: [prod.active],
                    comment: [prod.comment],
                  });
                  prodControls.push(pItem);
                });
                this.formArray.push(
                  this.fb.group({
                    id: [item.id],
                    name: [item.name],
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

  patchValues(orderPack: IOrderPack): void {
    this.editForm.patchValue({
      id: orderPack.id,
      name: orderPack.name,
      startDate: orderPack.startDate ? orderPack.startDate.format(DATE_FORMAT) : null,
      endDate: orderPack.endDate ? orderPack.endDate.format(DATE_FORMAT) : null,
      status: orderPack.status,
    });
    // TODO improve performance
    orderPack.products.forEach(product => {
      this.products.forEach(item => {
        if (String(item.id) == product.id) {
          item.active = true;
        }
      });
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

    if (orderPack.id) {
      orderPack.categories = undefined;
      this.subscribeToSaveResponse(this.orderPackService.update(orderPack));
    } else {
      orderPack.id = undefined;
      orderPack.categories = undefined;
      this.subscribeToSaveResponse(this.orderPackService.create(orderPack));
    }
  }

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
