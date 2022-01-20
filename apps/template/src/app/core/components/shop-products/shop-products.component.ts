import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})

/**
 * Shop Products Component
 */
export class ShopProductsComponent implements OnInit {

  /**
   * Header button list show
   */
  shopPages = true;

  constructor() { }

  ngOnInit(): void {
  }

}
