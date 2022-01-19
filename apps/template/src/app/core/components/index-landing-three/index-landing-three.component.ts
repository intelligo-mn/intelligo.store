import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-landing-three',
  templateUrl: './index-landing-three.component.html',
  styleUrls: ['./index-landing-three.component.css']
})
export class IndexLandingThreeComponent implements OnInit {
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
