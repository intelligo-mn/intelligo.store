import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})

/**
 * Components Component
 */
export class ComponentsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  } 

  /***
   * Model open
   */
  open(content) {
    this.modalService.open(content, { centered: true });
  }
  openLogin(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }
  Subscribeopen(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }
  Wishlistopen(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }
  Emptyopen(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }

}
