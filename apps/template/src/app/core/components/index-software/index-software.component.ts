import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-software',
  templateUrl: './index-software.component.html',
  styleUrls: ['./index-software.component.css']
})

/**
 * Software Component
 */
export class IndexSoftwareComponent implements OnInit {

  /**
   * nav Light class Add
   */
  navClass = 'nav-light';

  constructor(private modalService: NgbModal) { }

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

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-edit-alt h1 text-primary",
      title: "Seo Services",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
    },
    {
      icon: "uil uil-vector-square h1 text-primary",
      title: "Email Marketing",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    },
    {
      icon: "uil uil-file-search-alt h1 text-primary",
      title: "Data Analysis",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    },
    {
      icon: "uil uil-airplay h1 text-primary",
      title: "Digital Marketing",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
    },
    {
      icon: "uil uil-calendar-alt h1 text-primary",
      title: "Social Media Marketing",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    },
    {
      icon: "uil uil-clock h1 text-primary",
      title: "Link Building",
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

  ngOnInit(): void {
  }

  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}
