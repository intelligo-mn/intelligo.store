import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index-enterprise',
  templateUrl: './index-enterprise.component.html',
  styleUrls: ['./index-enterprise.component.css']
})

/***
 * Enterprise Component
 */
export class IndexEnterpriseComponent implements OnInit {
  constructor() { }
  navClass = 'nav-light';

  /***
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

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-edit-alt h1 text-primary",
      title: "Design & Development",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
    },
    {
      icon: "uil uil-vector-square h1 text-primary",
      title: "Management & Marketing",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    },
    {
      icon: "uil uil-file-search-alt h1 text-primary",
      title: "Stratagy & Research",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    },
    {
      icon: "uil uil-airplay h1 text-primary",
      title: "Easy To Use",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
    },
    {
      icon: "uil uil-calendar-alt h1 text-primary",
      title: "Daily Reports",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    },
    {
      icon: "uil uil-clock h1 text-primary",
      title: "Real Time Zone",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    }
  ];

  /**
   * Pricing Data
   */
  pricingData = [
    {
      title: "Free",
      price: 0,
      list: ["Full Access", "Source Files"],
      btn: "Buy Now"
    },
    {
      warning: "Best",
      title: "Starter",
      price: 39,
      list: ["Full Access", "Source Files", "Free Appointments"],
      btn: "Get Started"
    },
    {
      title: "Professional",
      price: 59,
      list: ["Full Access", "Source Files", "1 Domain Free", "Enhanced Security"],
      btn: "Try It Now"
    },
    {
      title: "Ultimate",
      price: 79,
      list: ["Full Access", "Source Files", "1 Domain Free", "Enhanced Security", "Free Installment"],
      btn: "Started Now"
    }
  ];

  /**
   * Blog Data
   */
  blogData = [
    {
      image: "assets/images/blog/01.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/blog/02.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/blog/03.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }
  ];

  /**
   * Review Testimonial Data
   */
   reviewData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Thomas Israel ",
      designation: "C.E.O",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Carl Oliver",
      designation: "P.A",
      message: `" The advantage of its Latin origin and the relative meaninglessness
      of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention
      from the layout. "`
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Barbara McIntosh",
      designation: "M.D",
      message: `" There is now an abundance of readable dummy texts. These are
      usually used when a text is required purely to fill a space. These alternatives to the classic Lorem
      Ipsum texts are often amusing and tell short, funny or nonsensical stories. "`
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Christa Smith",
      designation: "Manager",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text
      composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling
      all the instances of the unusual word 'consectetur' he could find "`
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Dean Tolle",
      designation: "Developer",
      message: `" It seems that only fragments of the original text remain in the
      Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have
      originated in the 16th century. "`
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Jill Webb",
      designation: "Designer",
      message: `" It seems that only fragments of the original text remain in the
      Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added
      or deleted at various positions within the text. "`
    }
  ];

  ngOnInit(): void {
  }

}
