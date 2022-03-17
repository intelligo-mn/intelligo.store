import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-index-seo-agency',
  templateUrl: './index-seo-agency.component.html',
  styleUrls: ['./index-seo-agency.component.css']
})
export class IndexSeoAgencyComponent implements OnInit {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
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
        items: 2
      },
      900: {
        items: 3
      }
    },
    nav: false,
  };

  seoAgency = [
    {
      images: 'assets/images/seo/6.png',
    },
    {
      images: 'assets/images/seo/4.png',
    },
    {
      images: 'assets/images/seo/7.png',
    },
    {
      images: 'assets/images/seo/5.png',
    },
    {
      images: 'assets/images/seo/3.png',
    },
    {
      images: 'assets/images/seo/1.png',
    },
    {
      images: 'assets/images/seo/2.png',
    }
  ];

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-chart-line h1 text-primary",
      title: "Grow your traffic",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a eleifend Aliquamaenean elementum semper."
    },
    {
      icon: "uil uil-adjust-circle h1 text-primary",
      title: "Get quality leads",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    },
    {
      icon: "uil uil-award h1 text-primary",
      title: "Drive more sell",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    }
  ];

  /**
   * Client Testimonial Data
   */
  testimonialData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Thomas Israel",
      designation: "C.E.O",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Barbara McIntosh",
      designation: "M.D",
      message: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Carl Oliver",
      designation: "P.A",
      message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Christa Smith",
      designation: "Manager",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Dean Tolle",
      designation: "Developer",
      message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Jill Webb",
      designation: "Designer",
      message: `" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`
    }
  ];

  isActive: string = "month";

  /**
   * Tab change value
   * @param value
   */
  changeTab(value: string) {
    this.isActive = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
