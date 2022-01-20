import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-portfolio',
  templateUrl: './index-portfolio.component.html',
  styleUrls: ['./index-portfolio.component.css']
})

/**
 * Portfolio Component
 */
export class IndexPortfolioComponent implements OnInit {
  
  hideFooter = true;

  filterredImages;
  galleryFilter = 'all';
  list = [{
    image: 'assets/images/work/20.jpg',
    title: 'Iphone mockup',
    type: 'Branding',
    category: 'branding'
  },
  {
    image: 'assets/images/work/13.jpg',
    title: 'Mockup Collection',
    type: 'Mockup',
    category: 'designing'
  },
  {
    image: 'assets/images/work/14.jpg',
    title: 'Abstract images',
    type: 'Abstract',
    category: 'photography'
  },
  {
    image: 'assets/images/work/15.jpg',
    title: 'Yellow bg with Books',
    type: 'Books',
    category: 'development'
  },
  {
    image: 'assets/images/work/16.jpg',
    title: 'Company V-card',
    type: 'V-card',
    category: 'branding'
  },
  {
    image: 'assets/images/work/17.jpg',
    title: 'Mockup box with paints',
    type: 'Photogrphy',
    category: 'branding'
  },
  {
    image: 'assets/images/work/18.jpg',
    title: 'Coffee cup',
    type: 'Cups',
    category: 'designing'
  },
  {
    image: 'assets/images/work/19.jpg',
    title: 'Pen and article',
    type: 'Article',
    category: 'development'
  }];

  constructor() { }

  ngOnInit(): void {
    this.filterredImages = this.list;
  }

  /**
   * Filter Class Add
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
