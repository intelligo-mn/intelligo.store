import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-landing-four',
  templateUrl: './index-landing-four.component.html',
  styleUrls: ['./index-landing-four.component.css']
})

/***
 * Landing Foue Component
 */
export class IndexLandingFourComponent implements OnInit {

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

}
