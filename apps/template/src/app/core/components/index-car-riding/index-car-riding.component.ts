import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index-car-riding',
  templateUrl: './index-car-riding.component.html',
  styleUrls: ['./index-car-riding.component.css']
})

/**
 * Car Riding Component
 */
export class IndexCarRidingComponent implements OnInit {

  constructor() { }

  /**
   * Testimonial Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 1
      }
    },
    nav: false
  };

  ngOnInit(): void {
  }


}
