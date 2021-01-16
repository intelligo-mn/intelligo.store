import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, Routes } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { Authority } from 'src/app/shared/constants/authority.constants';
import { IUnit, Unit } from 'src/app/shared/model/unit.model';
import { ResolvePagingParams } from 'src/app/shared/services/resolve-paging-param.service';
import { UnitUpdateComponent } from './unit-update.component';
import { UnitComponent } from './unit.component';
import { UnitService } from './unit.service';

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
      pagingParams: ResolvePagingParams,
    },
    data: {
      authorities: [Authority.ADMIN, Authority.USER],
      defaultSort: 'id,asc',
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
      authorities: [Authority.ADMIN, Authority.USER],
      pageTitle: 'childfoodApp.unit.home.title',
    },
    canActivate: [AuthGuard],
  },
];
