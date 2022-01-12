import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-page-pricing',
  templateUrl: './page-pricing.component.html',
  styleUrls: ['./page-pricing.component.css']
})
export class PagePricingComponent implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    },
    nav: false
  };

  ngOnInit(): void {
  }

}
