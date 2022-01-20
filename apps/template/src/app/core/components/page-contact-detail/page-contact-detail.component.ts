import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-contact-detail',
  templateUrl: './page-contact-detail.component.html',
  styleUrls: ['./page-contact-detail.component.css']
})

/**
 * Page Contact-Detail Component
 */
export class PageContactDetailComponent implements OnInit {

  hideFooter = true;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }
}
