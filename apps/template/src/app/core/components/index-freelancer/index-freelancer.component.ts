import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-freelancer',
  templateUrl: './index-freelancer.component.html',
  styleUrls: ['./index-freelancer.component.css']
})

/***
 * Freelancer Component
 */
export class IndexFreelancerComponent implements OnInit {

  /***
   * Footer bg color set
   */
  footerClass: true;
  footerVariant = 'bg-light';

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

  constructor() { }

  ngOnInit(): void {
  }

}
