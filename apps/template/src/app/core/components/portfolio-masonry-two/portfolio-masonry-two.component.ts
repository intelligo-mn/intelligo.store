import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-portfolio-masonry-two',
  templateUrl: './portfolio-masonry-two.component.html',
  styleUrls: ['./portfolio-masonry-two.component.css']
})

/***
 * Portfolio masonry two component
 */
export class PortfolioMasonryTwoComponent implements OnInit {

  /***
   * Masonry Option Function
   */
  public myOptions: NgxMasonryOptions = {
    horizontalOrder: true
  };

  /**
   * Portfolio Masonry Two Data
   */
  filterredImages;
  galleryFilter = 'all';

  private _album = [];

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

  constructor(private _lightbox: Lightbox) {
    for (let i = 13; i <= 24; i++) {
      const src = '../../../assets/images/work/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/work/' + i + '-thumb.jpg';
      const item = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this._album.push(item);
    }
  }

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

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
