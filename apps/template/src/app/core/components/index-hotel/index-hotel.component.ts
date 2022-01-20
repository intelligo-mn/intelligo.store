import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-hotel',
  templateUrl: './index-hotel.component.html',
  styleUrls: ['./index-hotel.component.css']
})

/***
 * Hotel Component
 */
export class IndexHotelComponent implements OnInit {

  /***
   * Nav Bg Light Class Add
   */
  navClass = 'bg-white';

  /***
   * Current Date get
   */
  checkin = new Date();
  checkout = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  showNavigationArrows = true;
  showNavigationIndicators = false;

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-wifi h1 text-primary",
      title: "Free WIFI",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a eleifend Aliquamaenean elementum semper."
    },
    {
      icon: "uil uil-process h1 text-primary",
      title: "Relaxation",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    },
    {
      icon: "uil uil-dumbbell h1 text-primary",
      title: "Spa & Fitness",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    },
    {
      icon: "uil uil-restaurant h1 text-primary",
      title: "Restaurant",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a eleifend Aliquamaenean elementum semper."
    },
    {
      icon: "uil uil-band-aid h1 text-primary",
      title: "Smooth Parallax",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    },
    {
      icon: "uil uil-bed-double h1 text-primary",
      title: "Bedrooms",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    }
  ];

  /**
   * Blog Data
   */
  blogData = [
    {
      image: "assets/images/hotel/bg01.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/hotel/bg02.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/hotel/bg03.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }
  ];

  constructor(private modalService: NgbModal) { }

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

  ngOnInit(): void {
  }

  /**
    * Open modal for show the video
    * @param content content of modal
    */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
  openModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
}
