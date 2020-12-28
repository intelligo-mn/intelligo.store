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
  { path: '/category', title: 'Бүтээгдэхүүний төрөл', icon: 'ni-button-pause text-yellow', class: '' },
  { path: '/unit', title: 'Хэмжих нэгж', icon: 'ni-bullet-list-67 text-red', class: '' },
];

export const ORDER_ROUTES: RouteInfo[] = [
  { path: '/order', title: 'Захиалга', icon: 'ni-delivery-fast text-primary', class: '' },
  { path: '/order-pack', title: 'Захиалгын багц', icon: 'ni-basket text-blue', class: '' },
];
export const OTHER_ROUTES: RouteInfo[] = [
  { path: '/organization', title: 'Харилцагч', icon: 'ni-building text-red', class: '' },
  { path: '/report', title: 'Тайлан', icon: 'ni-chart-pie-35 text-red', class: '' },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public productMenuItems: any[];
  public orderMenuItems: any[];
  public otherMenuItems: any[];

  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = MAIN_ROUTES.filter(menuItem => menuItem);
    this.productMenuItems = PRODUCT_ROUTES.filter(menuItem => menuItem);
    this.orderMenuItems = ORDER_ROUTES.filter(menuItem => menuItem);
    this.otherMenuItems = OTHER_ROUTES.filter(menuItem => menuItem);

    this.router.events.subscribe(event => {
      this.isCollapsed = false;
    });
  }
}
