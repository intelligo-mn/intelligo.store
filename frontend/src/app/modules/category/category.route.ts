import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, Routes } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { Authority } from 'src/app/shared/constants/authority.constants';
import { Category, ICategory } from 'src/app/shared/model/category.model';
import { ResolvePagingParams } from 'src/app/shared/services/resolve-paging-param.service';
import { CategoryUpdateComponent } from './category-update.component';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';

@Injectable({ providedIn: 'root' })
export class CategoryResolve implements Resolve<ICategory> {
  constructor(private service: CategoryService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICategory> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((category: HttpResponse<Category>) => {
          if (category.body) {
            return of(category.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Category());
  }
}

export const categoryRoute: Routes = [
  {
    path: '',
    component: CategoryComponent,
    resolve: {
      pagingParams: ResolvePagingParams,
    },
    data: {
      authorities: [Authority.ADMIN, Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'childfoodApp.category.home.title',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'new',
    component: CategoryUpdateComponent,
    resolve: {
      category: CategoryResolve,
    },
    data: {
      authorities: [Authority.ADMIN, Authority.USER],
      pageTitle: 'childfoodApp.category.home.title',
    },
    canActivate: [AuthGuard],
  }
];
