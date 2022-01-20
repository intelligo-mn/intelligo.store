import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-agency',
  templateUrl: './index-agency.component.html',
  styleUrls: ['./index-agency.component.css']
})

/***
 * Agency Component
 */
export class IndexAgencyComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-edit-alt h1 text-primary",
      title: "Design & Development",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a eleifend Aliquamaenean elementum semper."
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
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
  openModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

  ngOnInit(): void {
  }


}
