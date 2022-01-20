import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-business',
  templateUrl: './index-business.component.html',
  styleUrls: ['./index-business.component.css']
})

/***
 * Business Component
 */
export class IndexBusinessComponent implements OnInit {

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
   * Simple Pricing Data
   */
  simple_pricingData = [
    {
      title: "Free",
      price: 0,
      list: ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free"],
      btn: "Buy Now"
    },
    {
      warning: "Best",
      title: "Starter",
      price: 39,
      list: ["Full Access", "Source Files", "Free Appointments", "Free Installment", "Enhanced Security"],
      btn: "Get Started"
    },
    {
      title: "Professional",
      price: 59,
      list: ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free"],
      btn: "Try It Now"
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

  constructor(private modalService: NgbModal) { }

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
