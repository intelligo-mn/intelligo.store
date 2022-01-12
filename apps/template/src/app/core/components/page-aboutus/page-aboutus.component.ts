import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-aboutus',
  templateUrl: './page-aboutus.component.html',
  styleUrls: ['./page-aboutus.component.css']
})
export class PageAboutusComponent implements OnInit {

  constructor(private modalService: NgbModal) { }


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
