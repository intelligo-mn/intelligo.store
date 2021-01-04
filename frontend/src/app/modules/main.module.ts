import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
      },
      {
        path: 'unit',
        loadChildren: () => import('./unit/unit.module').then(m => m.UnitModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      },
      {
        path: 'organization',
        loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule),
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.ChildfoodOrderModule),
      },
      {
        path: 'order-pack',
        loadChildren: () => import('./order-pack/order-pack.module').then(m => m.OrderPackModule),
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      }
    ]),
  ],
})
export class MainModule {}
