import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOrderPack } from 'src/app/shared/model/order-pack.model';
import { IOrder } from 'src/app/shared/model/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  @Input() orders: IOrder[];

  @Output() onDelete: EventEmitter<any>;

  constructor() {
    this.onDelete = new EventEmitter();
  }

  ngOnInit() {}

  delete(order: IOrder) {
    this.onDelete.emit(order);
  }
}
