import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-shop-myaccount',
  templateUrl: './shop-myaccount.component.html',
  styleUrls: ['./shop-myaccount.component.css']
})

/**
 * Shop MyAccount Component
 */
export class ShopMyaccountComponent implements OnInit {

  /**
   * Header button list show
   */
  shopPages = true;

  constructor() { }

  ngOnInit(): void {
  }

}
