import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-detail-two',
  templateUrl: './portfolio-detail-two.component.html',
  styleUrls: ['./portfolio-detail-two.component.css']
})

/**
 * Portfolio Detail-Two Component
 */
export class PortfolioDetailTwoComponent implements OnInit {

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
