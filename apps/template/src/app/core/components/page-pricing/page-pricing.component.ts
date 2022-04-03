import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-pricing',
  templateUrl: './page-pricing.component.html',
  styleUrls: ['./page-pricing.component.css']
})

/**
 * Page Pricing Component
 */
export class PagePricingComponent implements OnInit {

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
   * Monthly Pricing Data
   */
  monthlyData = [
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
   * Monthly Pricing Data
   */
  yearlyData = [
    {
      title: "Free",
      price: 10,
      list: ["Full Access", "Source Files"],
      btn: "Buy Now"
    },
    {
      warning: "Best",
      title: "Starter",
      price: 139,
      list: ["Full Access", "Source Files", "Free Appointments"],
      btn: "Get Started"
    },
    {
      title: "Professional",
      price: 159,
      list: ["Full Access", "Source Files", "1 Domain Free", "Enhanced Security"],
      btn: "Try It Now"
    },
    {
      title: "Ultimate",
      price: 179,
      list: ["Full Access", "Source Files", "1 Domain Free", "Enhanced Security", "Free Installment"],
      btn: "Started Now"
    }
  ];

  constructor() { }

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

  ngOnInit(): void {
  }

}
