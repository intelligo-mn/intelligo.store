import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-job-company',
  templateUrl: './page-job-company.component.html',
  styleUrls: ['./page-job-company.component.css']
})

/**
 * Page Job-Company Component
 */
export class PageJobCompanyComponent implements OnInit {

  /**
   * Nav Light Class Add  
   */
  navClass = 'nav-light';
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /**
  * Open modal for show the video
  * @param content content of modal
  */
   openModal(content) {
    this.modalService.open(content, { centered: true });
  }

}
