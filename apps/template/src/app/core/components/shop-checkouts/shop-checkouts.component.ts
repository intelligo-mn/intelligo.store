import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-checkouts',
  templateUrl: './shop-checkouts.component.html',
  styleUrls: ['./shop-checkouts.component.css']
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
