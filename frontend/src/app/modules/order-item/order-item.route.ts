import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { JhiResolvePagingParams } from 'ng-jhipster';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'src/app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'src/app/core/auth/user-route-access-service';
import { IOrderItem, OrderItem } from 'src/app/shared/model/order-item.model';
import { OrderItemService } from './order-item.service';
import { OrderItemComponent } from './order-item.component';
import { OrderItemDetailComponent } from './order-item-detail.component';
import { OrderItemUpdateComponent } from './order-item-update.component';

@Injectable({ providedIn: 'root' })
export class OrderItemResolve implements Resolve<IOrderItem> {
  constructor(private service: OrderItemService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IOrderItem> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((orderItem: HttpResponse<OrderItem>) => {
          if (orderItem.body) {
            return of(orderItem.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new OrderItem());
  }
}

export const orderItemRoute: Routes = [
  {
    path: '',
    component: OrderItemComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams,
    },
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'childfoodApp.orderItem.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: OrderItemDetailComponent,
    resolve: {
      orderItem: OrderItemResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.orderItem.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: OrderItemUpdateComponent,
    resolve: {
      orderItem: OrderItemResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.orderItem.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: OrderItemUpdateComponent,
    resolve: {
      orderItem: OrderItemResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.orderItem.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
