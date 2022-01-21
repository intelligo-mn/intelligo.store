import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-modern-four',
  templateUrl: './portfolio-modern-four.component.html',
  styleUrls: ['./portfolio-modern-four.component.css']
})

/***
 * Portfolio mordern four component
 */
export class PortfolioModernFourComponent implements OnInit {

  filterredImages;
  galleryFilter = 'all';
  list = [{
    image: 'assets/images/work/1.jpg',
    title: 'Shifting Perspective',
    type: 'Studio',
    category: 'branding',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/2.jpg',
    title: 'Colors Magazine',
    type: 'Web Design',
    category: 'designing',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/3.jpg',
    title: 'Spa Cosmetics',
    type: 'Developing',
    category: 'photography',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/4.jpg',
    title: 'Riser Coffee',
    type: 'Branding',
    category: 'development',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/5.jpg',
    title: 'Dancing With Myself',
    type: 'Photography',
    category: 'branding',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/6.jpg',
    title: 'New trends in SEO',
    type: 'Business',
    category: 'branding',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/7.jpg',
    title: 'Shifting Perspective',
    type: 'Studio',
    category: 'designing',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/8.jpg',
    title: 'Colors Magazine',
    type: 'Web Design',
    category: 'development',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/9.jpg',
    title: 'Spa Cosmetics',
    type: 'Developing',
    category: 'branding',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/10.jpg',
    title: 'Riser Coffee',
    type: 'Branding',
    category: 'designing',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/11.jpg',
    title: 'Dancing With Myself',
    type: 'Photography',
    category: 'photography',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/12.jpg',
    title: 'New trends in SEO',
    type: 'Business',
    category: 'development',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  }
  ];


  constructor() { }

  ngOnInit(): void {
    this.filterredImages = this.list;
  }

  /***
   * Active all category selected
   */
  activeCategory(category) {
    this.galleryFilter = category;
    if (this.galleryFilter === 'all') {
      this.filterredImages = this.list;
    } else {
      this.filterredImages = this.list.filter(x => x.category === this.galleryFilter);
    }
  }

}
