import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index-enterprise',
  templateUrl: './index-enterprise.component.html',
  styleUrls: ['./index-enterprise.component.css']
})
export class IndexEnterpriseComponent implements OnInit {
  constructor() { }
  navClass = 'nav-light';

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
