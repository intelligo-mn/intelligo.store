import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOrder } from 'src/app/shared/model/order.model';

@Component({
  selector: 'app-order-list-all',
  templateUrl: './order-list-all.component.html',
  styleUrls: ['./order-list-all.component.scss'],
})
export class OrderListAllComponent implements OnInit {
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
