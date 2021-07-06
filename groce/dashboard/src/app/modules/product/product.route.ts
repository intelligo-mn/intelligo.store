import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, Routes } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { Authority } from 'src/app/shared/constants/authority.constants';
import { IProduct, Product } from 'src/app/shared/model/product.model';
import { ResolvePagingParams } from 'src/app/shared/services/resolve-paging-param.service';
import { ProductUpdateComponent } from './product-update.component';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

@Injectable({ providedIn: 'root' })
export class ProductResolve implements Resolve<IProduct> {
  constructor(private service: ProductService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IProduct> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((product: HttpResponse<Product>) => {
          if (product.body) {
            return of(product.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Product());
  }
}

export const productRoute: Routes = [
  {
    path: '',
    component: ProductComponent,
    resolve: {
      pagingParams: ResolvePagingParams,
    },
    data: {
      authorities: [Authority.ADMIN],
      defaultSort: 'id,asc',
      pageTitle: 'foodorderApp.product.home.title',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'new',
    component: ProductUpdateComponent,
    resolve: {
      product: ProductResolve,
    },
    data: {
      authorities: [Authority.ADMIN],
      pageTitle: 'foodorderApp.product.home.title',
    },
    canActivate: [AuthGuard],
  },
];
