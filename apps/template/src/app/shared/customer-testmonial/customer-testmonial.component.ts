import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-customer-testmonial',
  templateUrl: './customer-testmonial.component.html',
  styleUrls: ['./customer-testmonial.component.css']
})
export class CustomerTestmonialComponent implements OnInit {

  @Input() customerData: Array<{
    image: string;
    designation: string,
    name: string
  }>;

  /***
   * Client Owl Slider
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
        items: 3
      },
      600: {
        items: 3
      },
      900: {
        items: 3
      }
    },
    nav: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
