import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-agency',
  templateUrl: './index-agency.component.html',
  styleUrls: ['./index-agency.component.css']
})
export class IndexAgencyComponent implements OnInit {

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


  openModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
  ngOnInit(): void {
  }


}
