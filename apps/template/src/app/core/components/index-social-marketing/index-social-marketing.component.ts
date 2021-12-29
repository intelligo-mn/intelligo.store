import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-social-marketing',
  templateUrl: './index-social-marketing.component.html',
  styleUrls: ['./index-social-marketing.component.css']
})
export class IndexSocialMarketingComponent implements OnInit {

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
        items: 1
      },
      600: {
        items: 2
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
