import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'src/app/shared/constants/input.constants';

import { IOrder, Order } from 'src/app/shared/model/order.model';
import { OrderService } from './order.service';
import { IOrderItem } from 'src/app/shared/model/order-item.model';
import { ICustomer } from 'src/app/shared/model/customer.model';
import { CustomerService } from '../customer/customer.service';
import { OrderItemService } from '../order-item/order-item.service';

type SelectableEntity = IOrderItem | ICustomer;

@Component({
  selector: 'jhi-order-update',
  templateUrl: './order-update.component.html'
})
export class OrderUpdateComponent implements OnInit {
  isSaving = false;
  orderitems: IOrderItem[] = [];
  customers: ICustomer[] = [];

  editForm = this.fb.group({
    id: [],
    distributionDate: [null, [Validators.required]],
    status: [null, [Validators.required]],
    products: [null, Validators.required],
    manager: []
  });

  constructor(
    protected orderService: OrderService,
    protected orderItemService: OrderItemService,
    protected customerService: CustomerService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ order }) => {
      if (!order.id) {
        const today = moment().startOf('day');
        order.distributionDate = today;
      }

      this.updateForm(order);

      this.orderItemService.query().subscribe((res: HttpResponse<IOrderItem[]>) => (this.orderitems = res.body || []));

      this.customerService.query().subscribe((res: HttpResponse<ICustomer[]>) => (this.customers = res.body || []));
    });
  }

  updateForm(order: IOrder): void {
    this.editForm.patchValue({
      id: order.id,
      distributionDate: order.distributionDate ? order.distributionDate.format(DATE_TIME_FORMAT) : null,
      status: order.status,
      products: order.products,
      manager: order.manager
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const order = this.createFromForm();
    if (order.id !== undefined) {
      this.subscribeToSaveResponse(this.orderService.update(order));
    } else {
      this.subscribeToSaveResponse(this.orderService.create(order));
    }
  }

  private createFromForm(): IOrder {
    return {
      ...new Order(),
      id: this.editForm.get(['id'])!.value,
      distributionDate: this.editForm.get(['distributionDate'])!.value
        ? moment(this.editForm.get(['distributionDate'])!.value, DATE_TIME_FORMAT)
        : undefined,
      status: this.editForm.get(['status'])!.value,
      products: this.editForm.get(['products'])!.value,
      manager: this.editForm.get(['manager'])!.value
    };
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
