import { Component, OnInit } from '@angular/core';

interface work {
  image: string,
  name: string,
  designation: string,
};

@Component({
  selector: 'app-account-works',
  templateUrl: './account-works.component.html',
  styleUrls: ['./account-works.component.css']
})

/**
 * Account Works Component
 */
export class AccountWorksComponent implements OnInit {

  /**
   * Member Data
   */
  worksData: work[] = [
    {
      image: "assets/images/work/1.jpg",
      name: "Iphone mockup",
      designation: "Branding"
    },
    {
      image: "assets/images/work/2.jpg",
      name: "Mockup Collection",
      designation: "Mockup"
    },
    {
      image: "assets/images/work/3.jpg",
      name: "Abstract images",
      designation: "Abstract"
    },
    {
      image: "assets/images/work/4.jpg",
      name: "Yellow bg with Books",
      designation: "Books"
    },
    {
      image: "assets/images/work/5.jpg",
      name: "Company V-card",
      designation: "V-card"
    },
    {
      image: "assets/images/work/6.jpg",
      name: "Mockup box with paints",
      designation: "Photography"
    },
    {
      image: "assets/images/work/7.jpg",
      name: "Coffee cup",
      designation: "Cups"
    },
    {
      image: "assets/images/work/8.jpg",
      name: "Pen and article",
      designation: "Article"
    },
    {
      image: "assets/images/work/9.jpg",
      name: "White mockup box",
      designation: "Color"
    },
    {
      image: "assets/images/work/10.jpg",
      name: "Logo Vectors",
      designation: "Logos"
    },
    {
      image: "assets/images/work/11.jpg",
      name: "Black and white T-shirt",
      designation: "Clothes"
    },
    {
      image: "assets/images/work/12.jpg",
      name: "Yellow bg with cellphone",
      designation: "Cellphone"
    }
  ];


  /**
   * nav light class add
   */
  navClass = 'nav-light';

  constructor() { }

  ngOnInit(): void {
  }

}
