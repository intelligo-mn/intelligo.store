import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, Routes } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { Authority } from 'src/app/shared/constants/authority.constants';
import { IOrganization, Organization } from 'src/app/shared/model/organization.model';
import { ResolvePagingParams } from 'src/app/shared/services/resolve-paging-param.service';
import { OrganizationDetailComponent } from './organization-detail.component';
import { OrganizationUpdateComponent } from './organization-update.component';
import { OrganizationComponent } from './organization.component';
import { OrganizationService } from './organization.service';

@Injectable({ providedIn: 'root' })
export class OrganizationResolve implements Resolve<IOrganization> {
  constructor(private service: OrganizationService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IOrganization> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((organization: HttpResponse<Organization>) => {
          if (organization.body) {
            return of(organization.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Organization());
  }
}

export const organizationRoute: Routes = [
  {
    path: '',
    component: OrganizationComponent,
    resolve: {
      pagingParams: ResolvePagingParams,
    },
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'childfoodApp.organization.home.title',
    },
    canActivate: [AuthGuard],
  },
  {
    path: ':id/view',
    component: OrganizationDetailComponent,
    resolve: {
      organization: OrganizationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.organization.home.title',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'new',
    component: OrganizationUpdateComponent,
    resolve: {
      organization: OrganizationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.organization.home.title',
    },
    canActivate: [AuthGuard],
  },
  {
    path: ':id/edit',
    component: OrganizationUpdateComponent,
    resolve: {
      organization: OrganizationResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'childfoodApp.organization.home.title',
    },
    canActivate: [AuthGuard],
  },
];
