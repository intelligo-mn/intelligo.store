import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IOrderPack } from 'src/app/shared/model/order-pack.model';

@Component({
  selector: 'order-pack-detail',
  templateUrl: './order-pack-detail.component.html',
})
export class OrderPackDetailComponent implements OnInit {
  orderPack: IOrderPack | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ orderPack }) => (this.orderPack = orderPack));
  }

  previousState(): void {
    window.history.back();
  }
}
