import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-detail-three',
  templateUrl: './portfolio-detail-three.component.html',
  styleUrls: ['./portfolio-detail-three.component.css']
})

/**
 * Portfolio Detail-Three Component
 */
export class PortfolioDetailThreeComponent implements OnInit {

  /**
   * Resent Post Data
   */
  blogData = [
    {
      image: "assets/images/blog/06.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/blog/07.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/blog/08.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
