import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IOrderPack } from 'src/app/shared/model/order-pack.model';
import { IOrder } from 'src/app/shared/model/order.model';
import { OrderPackService } from '../order-pack/order-pack.service';

@Component({
  selector: 'order-pack-select',
  templateUrl: './order-pack-select.component.html',
})
export class OrderPackSelectComponent implements OnInit {
  orderPacks?: IOrderPack[];
  totalItems = 0;

  constructor(
    protected orderPackService: OrderPackService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected eventManager: EventManager,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.orderPackService.query().subscribe(
      (res: HttpResponse<IOrderPack[]>) => (this.orderPacks = res.body),
      () => { }
    );
  }

  trackId(index: number, item: IOrder): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }
}
