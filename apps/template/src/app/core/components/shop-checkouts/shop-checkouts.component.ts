import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-checkouts',
  templateUrl: './shop-checkouts.component.html'
})

/**
 * Shop Checkout Component
 */
export class ShopCheckoutsComponent implements OnInit {

  /***
   * Header button list show
   */
   shopPages = true;

  constructor() { }

  ngOnInit(): void {
  }

}
