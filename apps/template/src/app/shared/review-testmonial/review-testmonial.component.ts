import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-review-testmonial',
  templateUrl: './review-testmonial.component.html',
  styleUrls: ['./review-testmonial.component.css']
})
export class ReviewTestmonialComponent implements OnInit {

  @Input() reviewData: Array<{
    profile: string;
    message: number,
    name: string,
    designation: string
  }>;

   /***
   * Review Owl Slider
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

  constructor() { }

  ngOnInit(): void {
  }

}
