import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-page-services',
  templateUrl: './page-services.component.html',
  styleUrls: ['./page-services.component.css']
})
export class PageServicesComponent implements OnInit {

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
