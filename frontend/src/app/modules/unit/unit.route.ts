import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { JhiResolvePagingParams } from 'ng-jhipster';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'src/app/shared/constants/authority.constants';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { IUnit, Unit } from 'src/app/shared/model/unit.model';
import { UnitService } from './unit.service';
import { UnitComponent } from './unit.component';
import { UnitDetailComponent } from './unit-detail.component';
import { UnitUpdateComponent } from './unit-update.component';

@Injectable({ providedIn: 'root' })
export class UnitResolve implements Resolve<IUnit> {
  constructor(private service: UnitService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUnit> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((unit: HttpResponse<Unit>) => {
          if (unit.body) {
            return of(unit.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Unit());
  }
}

export const unitRoute: Routes = [
  {
    path: '',
    component: UnitComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams,
    },
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'childfoodApp.unit.home.title',
    },
    canActivate: [AuthGuard],
  },
  {
    path: ':id/view',
    component: UnitDetailComponent,
    resolve: {
      unit: UnitResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.unit.home.title',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'new',
    component: UnitUpdateComponent,
    resolve: {
      unit: UnitResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.unit.home.title',
    },
    canActivate: [AuthGuard],
  },
  {
    path: ':id/edit',
    component: UnitUpdateComponent,
    resolve: {
      unit: UnitResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.unit.home.title',
    },
    canActivate: [AuthGuard],
  },
];
