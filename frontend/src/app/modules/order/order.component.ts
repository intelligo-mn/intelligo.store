import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventManager } from '@devmn/event-manager';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { IOrder } from 'src/app/shared/model/order.model';

import { ITEMS_PER_PAGE } from 'src/app/shared/constants/pagination.constants';
import { OrderService } from './order.service';
import { OrderDeleteDialogComponent } from './order-delete-dialog.component';
import { OrderPackSelectComponent } from './order-pack-select.component';
import { IOrderPack } from 'src/app/shared/model/order-pack.model';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit, OnDestroy {
  orders?: IOrder[];
  eventSubscriber?: Subscription;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;
  ngbPaginationPage = 1;
  active = 1

  constructor(
    protected orderService: OrderService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected eventManager: EventManager,
    protected modalService: NgbModal
  ) {}

  loadPage(page?: number): void {
    const pageToLoad: number = page || this.page;

    this.orderService
      .query({
        page: pageToLoad - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe(
        (res: HttpResponse<IOrder[]>) => this.onSuccess(res.body, res.headers, pageToLoad),
        () => this.onError()
      );
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.page = data.pagingParams.page;
      this.ascending = data.pagingParams.ascending;
      this.predicate = data.pagingParams.predicate;
      this.ngbPaginationPage = data.pagingParams.page;
      this.loadPage();
    });
    this.registerChangeInOrders();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IOrder): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInOrders(): void {
    this.eventSubscriber = this.eventManager.subscribe('orderListModification', () => this.loadPage());
  }

  delete(order: IOrder): void {
    const modalRef = this.modalService.open(OrderDeleteDialogComponent, { size: 'sm', backdrop: 'static' });
    modalRef.componentInstance.order = order;
  }

  add(): void {
    const modalRef: NgbModalRef = this.modalService.open(OrderPackSelectComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((res:IOrderPack)=>{
      this.router.navigate(['/order/create/', res.id])
    })
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected onSuccess(data: IOrder[] | null, headers: HttpHeaders, page: number): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.page = page;
    this.router.navigate(['/order'], {
      queryParams: {
        page: this.page,
        size: this.itemsPerPage,
        sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
      },
    });
    this.orders = data || [];
  }

  protected onError(): void {
    this.ngbPaginationPage = this.page;
  }
}
