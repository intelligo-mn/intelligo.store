import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index-blog',
  templateUrl: './index-blog.component.html',
  styleUrls: ['./index-blog.component.css']
})
export class IndexBlogComponent implements OnInit {
  navClass = 'bg-white';
  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    dots: false,
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
