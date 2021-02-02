import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserComponent } from './user.component';
import { UserUpdateComponent } from './user-update.component';
import { IUser, User } from 'src/app/core/user/user.model';
import { UserService } from 'src/app/core/user/user.service';
import { ResolvePagingParams } from 'src/app/shared/services/resolve-paging-param.service';

@Injectable({ providedIn: 'root' })
export class UserManagementResolve implements Resolve<IUser> {
  constructor(private service: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUser> {
    const id = route.params['login'];
    if (id) {
      return this.service.find(id);
    }
    return of(new User());
  }
}

export const userManagementRoute: Routes = [
  {
    path: 'u',
    component: UserComponent,
    resolve: {
      pagingParams: ResolvePagingParams
    },
    data: {
      defaultSort: 'id,asc'
    }
  },
  {
    path: 'new',
    component: UserUpdateComponent,
    resolve: {
      user: UserManagementResolve
    }
  },
  {
    path: ':login/edit',
    component: UserUpdateComponent,
    resolve: {
      user: UserManagementResolve
    }
  }
];
