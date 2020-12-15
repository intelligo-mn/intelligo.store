import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IOrderItem, OrderItem } from 'src/app/shared/model/order-item.model';
import { OrderItemService } from './order-item.service';
import { IProduct } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/entities/product/product.service';

@Component({
  selector: 'order-item-update',
  templateUrl: './order-item-update.component.html'
})
export class OrderItemUpdateComponent implements OnInit {
  isSaving = false;
  products: IProduct[] = [];

  editForm = this.fb.group({
    id: [],
    quantity: [],
    products: []
  });

  constructor(
    protected orderItemService: OrderItemService,
    protected productService: ProductService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ orderItem }) => {
      this.updateForm(orderItem);

      this.productService.query().subscribe((res: HttpResponse<IProduct[]>) => (this.products = res.body || []));
    });
  }

  updateForm(orderItem: IOrderItem): void {
    this.editForm.patchValue({
      id: orderItem.id,
      quantity: orderItem.quantity,
      products: orderItem.products
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const orderItem = this.createFromForm();
    if (orderItem.id !== undefined) {
      this.subscribeToSaveResponse(this.orderItemService.update(orderItem));
    } else {
      this.subscribeToSaveResponse(this.orderItemService.create(orderItem));
    }
  }

  private createFromForm(): IOrderItem {
    return {
      ...new OrderItem(),
      id: this.editForm.get(['id'])!.value,
      quantity: this.editForm.get(['quantity'])!.value,
      products: this.editForm.get(['products'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrderItem>>): void {
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
