import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index-apps',
  templateUrl: './index-apps.component.html',
  styleUrls: ['./index-apps.component.css']
})

/***
 * Apps Component
 */
export class IndexAppsComponent implements OnInit {

  constructor() { }

  /***
   * Client Review Owl Slider
   */
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

  /**
   * Simple Pricing Data
   */
  simple_pricingData = [
    {
      title: "Free",
      price: 0,
      list: ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free"],
      btn: "Buy Now"
    },
    {
      warning: "Best",
      title: "Starter",
      price: 39,
      list: ["Full Access", "Source Files", "Free Appointments", "Free Installment", "Enhanced Security"],
      btn: "Get Started"
    },
    {
      title: "Professional",
      price: 59,
      list: ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free"],
      btn: "Try It Now"
    }
  ];

  ngOnInit(): void {
  }
}
