import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry'; 

@Component({
  selector: 'app-page-work-masonry',
  templateUrl: './page-work-masonry.component.html',
  styleUrls: ['./page-work-masonry.component.css']
})
export class PageWorkMasonryComponent implements OnInit {


  public myOptions: NgxMasonryOptions = {
    horizontalOrder: true
  };

  filterredImages;
  galleryFilter = 'all';
  list = [{
    image: 'assets/images/work/13.jpg',
    title: 'Iphone mockup',
    text: 'Branding',
    category: 'branding'
  },
  {
    image: 'assets/images/work/21.jpg',
    title: 'Mockup Collection',
    text: 'Mockup',
    category: 'designing'
  },
  {
    image: 'assets/images/work/14.jpg',
    title: 'Abstract images',
    text: 'Abstract',
    category: 'photography'
  },
  {
    image: 'assets/images/work/22.jpg',
    title: 'Yellow bg with Books',
    text: 'Books',
    category: 'development'
  },
  {
    image: 'assets/images/work/16.jpg',
    title: 'Company V-card',
    text: 'V-card',
    category: 'branding'
  },
  {
    image: 'assets/images/work/15.jpg',
    title: 'Coffee cup',
    text: 'Cups',
    category: 'designing'
  },
  {
    image: 'assets/images/work/23.jpg',
    title: 'Mockup box with paints',
    text: 'Photography',
    category: 'branding'
  },
  {
    image: 'assets/images/work/17.jpg',
    title: 'Pen and article',
    text: 'Article',
    category: 'development'
  },
  {
    image: 'assets/images/work/24.jpg',
    title: 'White mockup box',
    text: 'Color',
    category: 'photography'
  },
  {
    image: 'assets/images/work/18.jpg',
    title: 'Logo Vectors',
    text: 'Logos',
    category: 'photography'
  }
  ];

  lightboximgs = [
    'assets/images/work/13.jpg',
    'assets/images/work/21.jpg',
    'assets/images/work/14.jpg',
    'assets/images/work/22.jpg',
    'assets/images/work/16.jpg',
    'assets/images/work/15.jpg',
    'assets/images/work/23.jpg',
    'assets/images/work/17.jpg',
    'assets/images/work/24.jpg',
    'assets/images/work/19.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
    this.filterredImages = this.list;
  }
  activeCategory(category) {
    this.galleryFilter = category;
    if (this.galleryFilter === 'all') {
      this.filterredImages = this.list;
    } else {
      this.filterredImages = this.list.filter(x => x.category === this.galleryFilter);
    }
  }
}
