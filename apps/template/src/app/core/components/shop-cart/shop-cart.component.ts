import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})

/**
 * Shop Cart Component
 */
export class ShopCartComponent implements OnInit {

  /***
   * Header button list show
   */
   shopPages = true;

  list = [{
    id: 1,
    image: 'assets/images/shop/product/s1.jpg',
    title: 'T-Shirt',
    price: 255,
    qty: 2,
    total: 510
  },
  {
    id: 2,
    image: 'assets/images/shop/product/s3.jpg',
    title: 'Branded Watch',
    price: 520,
    qty: 1,
    total: 520
  },
  {
    id: 3,
    image: 'assets/images/shop/product/s6.jpg',
    title: 'T-Shirt',
    price: 160,
    qty: 4,
    total: 640
  },
  {
    id: 4,
    image: 'assets/images/shop/product/s10.jpg',
    title: 'Branded Watch',
    price: 260,
    qty: 2,
    total: 520
  }];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * imcrease-decrememt set
   */
  increase(val) {
    this.list.map(product => {
      if (product.id === val) {
        product.qty += 1;
      }
    });
  };
  decrement(val) {
    this.list.map(product => {
      if (product.id === val) {
        if (product.qty > 0) {
          product.qty -= 1;
        }
      }
    });
  }
}
