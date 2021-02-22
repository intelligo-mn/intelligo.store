import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'src/app/shared/constants/input.constants';

import { IOrder, Order } from 'src/app/shared/model/order.model';
import { OrderService } from './order.service';
import { IOrderItem } from 'src/app/shared/model/order-item.model';
import { IUser } from 'src/app/shared/model/user.model';
import { OrderPackService } from '../order-pack/order-pack.service';
import { IOrderPack } from 'src/app/shared/model/order-pack.model';
import { IProduct } from 'src/app/shared/model/product.model';
import { Category, ICategory } from 'src/app/shared/model/category.model';
import { ProductService } from '../product/product.service';
import { CategoryService } from '../category/category.service';
import { OrderStatus } from 'src/app/shared/model/enums/order-status.model';

type SelectableEntity = IOrderItem | IUser;

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./../order-pack/order-pack.component.scss', './order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  isSaving = false;
  active = 0;
  orderitems: IOrderItem[] = [];
  pack: IOrderPack;
  customers: IUser[] = [];
  products: IProduct[] = [];
  categories: ICategory[] = [];

  editForm = this.fb.group({
    id: [],
    distributionDate: [null, [Validators.required]],
    status: [null, [Validators.required]],
    manager: [],
    categories: this.fb.array([]),
  });

  constructor(
    protected orderService: OrderService,
    protected productService: ProductService,
    protected categoryService: CategoryService,
    protected orderPackService: OrderPackService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const parentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.orderPackService.find(parentId).subscribe(res => {
      this.pack = res.body;
      this.categoryService.query().subscribe((res: HttpResponse<IProduct[]>) => {
        this.categories = res.body || [];
        this.productService.query().subscribe(
          (res: HttpResponse<IProduct[]>) => {
            this.products = res.body || [];
            this.patchValues(this.pack);
          },
          (error: any) => {},
          () => {
            this.categories.forEach(item => {
              this.getProduct(item).then(res => {
                item.products = res;
                if (res.length == 0) return;
                const prodControls: AbstractControl[] = [];
                item.products?.forEach(prod => {
                  const pItem = this.fb.group({
                    id: [prod.id],
                    name: [prod.name],
                    category: [prod.category],
                    unit: [prod.unit],
                    active: [prod.active],
                    comment: [prod.comment],
                    quantity: [],
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

  getProduct(category: ICategory): Promise<IProduct[]> {
    return new Promise((resolve, reject) => {
      if (category?.products?.length > 0) {
        resolve(category.products);
      }
      const arr: Array<IProduct> = Array.from(this.pack.products);
      const pro = arr.filter(item => item.category?.id == category?.id);
      resolve(pro);
    });
  }

  patchValues(orderPack: IOrderPack): void {
    orderPack.products.forEach(product => {
      const item = this.products.find(pro => pro.id == product.id);
      if (item) {
        product.category = item.category;
        product.unit = item.unit;
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  get formArray(): FormArray {
    return this.editForm.get('categories') as FormArray;
  }

  formArrayChild(index: number): FormArray {
    return this.formArray?.controls[index]?.get('products') as FormArray;
  }

  save(): void {
    this.isSaving = true;
    const order: IOrder = this.editForm.value;
    if (order.id) {
      this.subscribeToSaveResponse(this.orderService.update(order));
    } else {
      order.id = undefined
      order.status = OrderStatus.PENDING
      this.subscribeToSaveResponse(this.orderService.create(order));
    }
  } 

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrder>>): void {
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

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
