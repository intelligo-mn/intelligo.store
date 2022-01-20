import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-contact-three',
  templateUrl: './page-contact-three.component.html',
  styleUrls: ['./page-contact-three.component.css']
})

/**
 * Page Contact-Three Component
 */
export class PageContactThreeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }

}
