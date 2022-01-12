import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-coworking',
  templateUrl: './index-coworking.component.html',
  styleUrls: ['./index-coworking.component.css']
})
export class IndexCoworkingComponent implements OnInit {
  navClass = 'nav-light';
  constructor(config: NgbCarouselConfig, private modalService: NgbModal) {
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  showNavigationIndicators = false;

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
