import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { Authority } from 'src/app/shared/constants/authority.constants';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      authorities: [Authority.ADMIN]
    },
    canActivate: [AuthGuard],
  },
  {
    path: '',
    children: [
      {
        path: '',
        data: {
          authorities: [Authority.ADMIN]
        },
        loadChildren: () => import('./../../modules/main.module').then(m => m.MainModule),
      },
    ],
    canActivate: [AuthGuard],
  },
];
