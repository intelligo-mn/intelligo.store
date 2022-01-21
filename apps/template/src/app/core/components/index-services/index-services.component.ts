import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-services',
  templateUrl: './index-services.component.html',
  styleUrls: ['./index-services.component.css']
})

/***
 * Services Component
 */
export class IndexServicesComponent implements OnInit {

  /***
   * Footer bg color set
   */
  footerClass: true;
  footerVariant = 'bg-light';

  constructor(private modalService: NgbModal) { }

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-flip-h h1 text-primary",
      title: "Built for Everyone",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
    },
    {
      icon: "uil uil-minus-path h1 text-primary",
      title: "Responsive Design",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    },
    {
      icon: "uil uil-layers-alt h1 text-primary",
      title: "Build Everything",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    }
  ];

  /**
   * Customer Testimonial Data
   */
  customerData = [
    {
      image: "assets/images/client/amazon.svg",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`,
      name: "Thomas Israel",
    },
    {
      image: "assets/images/client/google.svg",
      message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
      name: "Carl Oliver",
    },
    {
      image: "assets/images/client/lenovo.svg",
      message: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`,
      name: "Barbara McIntosh",
    },
    {
      image: "assets/images/client/paypal.svg",
      message: `" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`,
      name: "Jill Webb",
    },
    {
      image: "assets/images/client/shopify.svg",
      message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`,
      name: "Dean Tolle",
    },
    {
      image: "assets/images/client/spotify.svg",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`,
      name: "Christa Smith",
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
