import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index-travel',
  templateUrl: './index-travel.component.html',
  styleUrls: ['./index-travel.component.css']
})
export class IndexTravelComponent implements OnInit {
  navClass = 'nav-light';
  constructor() { }

  checkin = new Date();
  checkout = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 5
      },
      900: {
        items: 8
      }
    },
    nav: false
  };

  testiOptions: OwlOptions = {
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
