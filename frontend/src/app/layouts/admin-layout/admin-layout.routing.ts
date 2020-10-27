import { Routes } from '@angular/router';

import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/core/auth.guard';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cash-capital',
    loadChildren: () => import('../../modules/cash-capital/cash-capital.module').then(m => m.CashCapitalModule),

    canActivate: [AuthGuard],
  },
  {
    path: 'inventory',
    loadChildren: () => import('../../modules/inventory/inventory.module').then(m => m.InventoryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'main-capital',
    loadChildren: () => import('../../modules/main-capital/main-capital.module').then(m => m.MainCapitalModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'salary',
    loadChildren: () => import('../../modules/salary/salary.module').then(m => m.SalaryModule),
    canActivate: [AuthGuard],
  },
];
