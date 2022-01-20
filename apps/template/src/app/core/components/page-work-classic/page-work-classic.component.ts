import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-work-classic',
  templateUrl: './page-work-classic.component.html',
  styleUrls: ['./page-work-classic.component.css']
})
export class PageWorkClassicComponent implements OnInit {
  filterredImages;
  galleryFilter = 'all';
  constructor() { }
  workData = [{
    image: 'assets/images/work/4.jpg',
    title: 'Yellow bg with Books',
    type: 'Books',
    category: 'branding'
  },
  {
    image: 'assets/images/work/2.jpg',
    title: 'Mockup Collection',
    type: 'Mockup',
    category: 'designing'
  },
  {
    image: 'assets/images/work/3.jpg',
    title: 'Abstract images',
    type: 'Abstract',
    category: 'photography'
  },
  {
    image: 'assets/images/work/4.jpg',
    title: 'Yellow bg with Books',
    type: 'Books',
    category: 'development'
  },
  {
    image: 'assets/images/work/5.jpg',
    title: 'Company V-card',
    type: 'V-card',
    category: 'branding'
  },
  {
    image: 'assets/images/work/6.jpg',
    title: 'Mockup box with paints',
    type: 'Photography',
    category: 'branding'
  },
  {
    image: 'assets/images/work/7.jpg',
    title: 'Coffee cup',
    type: 'Cups',
    category: 'designing'
  },
  {
    image: 'assets/images/work/8.jpg',
    title: 'Pen and article',
    type: 'Article',
    category: 'development'
  },
  {
    image: 'assets/images/work/9.jpg',
    title: 'White mockup box',
    type: 'Color',
    category: 'photography'
  },
  {
    image: 'assets/images/work/10.jpg',
    title: 'Logo Vectors',
    type: 'Logos',
    category: 'photography'
  },
  {
    image: 'assets/images/work/11.jpg',
    title: 'Black and white T-shirt',
    type: 'Clothes',
    category: 'branding'
  },
  {
    image: 'assets/images/work/12.jpg',
    title: 'Yellow bg with cellphone',
    type: 'Cellphone',
    category: 'branding'
  }];

  ngOnInit(): void {
    this.filterredImages = this.workData;
  }

  activeCategory(category) {
    this.galleryFilter = category;
    if (this.galleryFilter === 'all') {
      this.filterredImages = this.workData;
    } else {
      this.filterredImages = this.workData.filter(x => x.category === this.galleryFilter);
    }
  }


}
