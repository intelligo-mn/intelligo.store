import { Routes } from '@angular/router';

import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/core/auth.guard';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  }
];
