import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'category',
    children: [
      {
        path: '',
        loadChildren: () => import('./../../modules/category/category.module').then(m => m.CategoryModule),
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'order',
    children: [
      {
        path: '',
        loadChildren: () => import('./../../modules/order/order.module').then(m => m.OrderModule),
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'organization',
    children: [
      {
        path: '',
        loadChildren: () => import('./../../modules/organization/organization.module').then(m => m.OrganizationModule),
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'package',
    children: [
      {
        path: '',
        loadChildren: () => import('./../../modules/package/package.module').then(m => m.PackageModule),
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'product',
    children: [
      {
        path: '',
        loadChildren: () => import('./../../modules/product/product.module').then(m => m.ProductModule),
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'unit',
    children: [
      {
        path: '',
        loadChildren: () => import('./../../modules/unit/unit.module').then(m => m.UnitModule),
      },
    ],
    canActivate: [AuthGuard],
  },
];
