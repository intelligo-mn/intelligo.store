import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-aboutus-two',
  templateUrl: './page-aboutus-two.component.html',
  styleUrls: ['./page-aboutus-two.component.css']
})

/**
 * Aboutus Two Component
 */
export class PageAboutusTwoComponent implements OnInit {
  navClass = 'nav-light';
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
