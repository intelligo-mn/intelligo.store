import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const MAIN_ROUTES: RouteInfo[] = [{ path: '/dashboard', title: 'Удирдлагын хэсэг', icon: 'ni-tv-2 text-primary', class: '' }];

export const CASH_CAPITAL_ROUTES: RouteInfo[] = [
  { path: '/cash-capital/transaction', title: 'Орлого Зарлага', icon: 'ni-credit-card text-blue', class: '' },
  { path: '/cash-capital/other', title: 'Бусад гүйлгээ', icon: 'ni-bullet-list-67 text-red', class: '' },
];

export const INVENTORY_ROUTES: RouteInfo[] = [
  { path: '/inventory/purchase', title: 'Худалдан авалт', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/inventory/sale', title: 'Борлуулалт', icon: 'ni-credit-card text-blue', class: '' },
  { path: '/inventory/refund', title: 'Буцаалт', icon: 'ni-chart-bar-32 text-orange', class: '' },
  { path: '/inventory/extenditure', title: 'Зарлага', icon: 'ni-button-pause text-yellow', class: '' },
  { path: '/inventory/movement', title: 'Дотоод хөдөлгөөн', icon: 'ni-bullet-list-67 text-red', class: '' },
];

export const MAIN_CAPITAL_ROUTES: RouteInfo[] = [
  { path: '/main-capital/purchase', title: 'Худалдан авалт', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/main-capital/sale', title: 'Борлуулалт', icon: 'ni-credit-card text-blue', class: '' },
  { path: '/main-capital/expenditure', title: 'Зарлага', icon: 'ni-button-pause text-yellow', class: '' },
  { path: '/main-capital/movement', title: 'Дотоод хөдөлгөөн', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/main-capital/deprecation', title: 'Элэгдэл тооцох', icon: 'ni-chart-bar-32 text-orange', class: '' },
];
export const MAIN_SALARY_ROUTES: RouteInfo[] = [
  { path: '/salary', title: 'Цалин', icon: 'ni-bullet-list-67 text-red', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public cashMenuItems: any[];
  public inventoryMenuItems: any[];
  public mainCapitalMenuItems: any[];
  public salaryMenuItems: any[];

  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = MAIN_ROUTES.filter(menuItem => menuItem);
    this.cashMenuItems = CASH_CAPITAL_ROUTES.filter(menuItem => menuItem);
    this.inventoryMenuItems = INVENTORY_ROUTES.filter(menuItem => menuItem);
    this.mainCapitalMenuItems = MAIN_CAPITAL_ROUTES.filter(menuItem => menuItem);
    this.salaryMenuItems = MAIN_SALARY_ROUTES.filter(menuItem => menuItem);

    this.router.events.subscribe(event => {
      this.isCollapsed = false;
    });
  }
}
