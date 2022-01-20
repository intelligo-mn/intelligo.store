import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-contact-one',
  templateUrl: './page-contact-one.component.html',
  styleUrls: ['./page-contact-one.component.css']
})

/**
 * Page Contact-One Component
 */
export class PageContactOneComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }
}
