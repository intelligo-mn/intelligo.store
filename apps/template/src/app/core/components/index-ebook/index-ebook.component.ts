import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-index-ebook',
  templateUrl: './index-ebook.component.html',
  styleUrls: ['./index-ebook.component.css']
})

/**
 * Ebook Component
 */
export class IndexEbookComponent implements OnInit {

  private books = [];

  constructor(private modalService: NgbModal, private _lightbox: Lightbox) { 
    for (let i = 1; i <= 7; i++) {
      const src = '../../../assets/images/book/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/book/' + i + '-thumb.jpg';
      const book = {
         src: src,
         caption: caption,
         thumb: thumb
      };
      this.books.push(book);
    }
  }

  /**
   * Testimonial Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      900: {
        items: 6
      }
    },
    nav: false
  };

  bookList = [
    {
      id: '1',
      image: 'assets/images/book/1.jpg',
      title: 'Iphone mockup',
      price: '$ 16'
    },
    {
      id: '2',
      image: 'assets/images/book/2.jpg',
      title: 'Iphone mockup',
      price: '$ 16'
    },
    {
      id: '3',
      image: 'assets/images/book/3.jpg',
      title: 'Iphone mockup',
      price: '$ 16'
    },
    {
      id: '4',
      image: 'assets/images/book/4.jpg',
      title: 'Iphone mockup',
      price: '$ 16'
    },
    {
      id: '5',
      image: 'assets/images/book/5.jpg',
      title: 'Iphone mockup',
      price: '$ 16'
    },
    {
      id: '6',
      image: 'assets/images/book/6.jpg',
      title: 'Iphone mockup',
      price: '$ 16'
    },
    {
      id: '7',
      image: 'assets/images/book/7.jpg',
      title: 'Iphone mockup',
      price: '$ 16'
    }
  ];

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.books, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit(): void {
  }

  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}
