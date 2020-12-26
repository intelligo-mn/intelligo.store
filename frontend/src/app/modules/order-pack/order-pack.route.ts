import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'src/app/shared/constants/authority.constants';
import { IOrderPack, OrderPack } from 'src/app/shared/model/order-pack.model';
import { OrderPackService } from './order-pack.service';
import { OrderPackComponent } from './order-pack.component';
import { OrderPackDetailComponent } from './order-pack-detail.component';
import { OrderPackUpdateComponent } from './order-pack-update.component';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { ResolvePagingParams } from 'src/app/shared/services/resolve-paging-param.service';

@Injectable({ providedIn: 'root' })
export class OrderPackResolve implements Resolve<IOrderPack> {
  constructor(private service: OrderPackService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IOrderPack> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((orderPack: HttpResponse<OrderPack>) => {
          if (orderPack.body) {
            return of(orderPack.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new OrderPack());
  }
}

export const orderPackRoute: Routes = [
  {
    path: '',
    component: OrderPackComponent,
    resolve: {
      pagingParams: ResolvePagingParams,
    },
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'childfoodApp.orderPack.home.title',
    },
    canActivate: [AuthGuard],
  },
  {
    path: ':id/view',
    component: OrderPackDetailComponent,
    resolve: {
      orderPack: OrderPackResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.orderPack.home.title',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'new',
    component: OrderPackUpdateComponent,
    resolve: {
      orderPack: OrderPackResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.orderPack.home.title',
    },
    canActivate: [AuthGuard],
  },
  {
    path: ':id/edit',
    component: OrderPackUpdateComponent,
    resolve: {
      orderPack: OrderPackResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.orderPack.home.title',
    },
    canActivate: [AuthGuard],
  },
];
