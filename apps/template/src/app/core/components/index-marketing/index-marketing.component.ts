import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-marketing',
  templateUrl: './index-marketing.component.html',
  styleUrls: ['./index-marketing.component.css']
})
export class IndexMarketingComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      },
      900: {
        items: 3
      }
    },
    nav: false
  };

  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

  ngOnInit(): void {
  }

}
