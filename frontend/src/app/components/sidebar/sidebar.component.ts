import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const MAIN_ROUTES: RouteInfo[] = [{ path: '/dashboard', title: 'Удирдлагын хэсэг', icon: 'ni-tv-2 text-primary', class: '' }];

export const PRODUCT_ROUTES: RouteInfo[] = [
  { path: '/product', title: 'Бүтээгдэхүүн', icon: 'ni-bag-17 text-primary', class: '' },
  { path: '/category', title: 'Төрөл', icon: 'ni-button-pause text-blue', class: '' },
  { path: '/unit', title: 'Хэмжих нэгж', icon: 'ni-bullet-list-67 text-orange', class: '' },
];

export const ORDER_ROUTES: RouteInfo[] = [
  { path: '/order', title: 'Захиалга', icon: 'ni-delivery-fast text-red', class: '' },
  { path: '/order-pack', title: 'Захиалгын багц', icon: 'ni-basket text-info', class: '' },
];

export const USER_ROUTES: RouteInfo[] = [
  { path: '/organization/list', title: 'Байгууллага', icon: 'ni-building text-pink', class: '' },
  { path: '/user/u', title: 'Хэрэглэгч', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/report', title: 'Тайлан', icon: 'ni-chart-pie-35 text-red', class: '' },
];

export const OTHER_ROUTES: RouteInfo[] = [
  { path: '/settings', title: 'Тохиргоо', icon: 'ni-settings-gear-65 text-primary', class: '' },
  { path: '/api/v1/docs', title: 'API Documentation', icon: 'ni ni-spaceship text-primary', class: '' },
];

export const ALL_ROUTES: RouteInfo[] = [...MAIN_ROUTES, ...PRODUCT_ROUTES, ...ORDER_ROUTES, ...USER_ROUTES, ...OTHER_ROUTES];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public productMenuItems: any[];
  public orderMenuItems: any[];
  public userMenuItems: any[];
  public otherMenuItems: any[];

  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = MAIN_ROUTES.filter(menuItem => menuItem);
    this.productMenuItems = PRODUCT_ROUTES.filter(menuItem => menuItem);
    this.orderMenuItems = ORDER_ROUTES.filter(menuItem => menuItem);
    this.userMenuItems = USER_ROUTES.filter(menuItem => menuItem);
    this.otherMenuItems = OTHER_ROUTES.filter(menuItem => menuItem);

    this.router.events.subscribe(event => {
      this.isCollapsed = false;
    });
  }
}
