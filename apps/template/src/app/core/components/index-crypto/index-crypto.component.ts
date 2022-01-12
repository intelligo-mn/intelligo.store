import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index-crypto',
  templateUrl: './index-crypto.component.html',
  styleUrls: ['./index-crypto.component.css']
})
export class IndexCryptoComponent implements OnInit {
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
