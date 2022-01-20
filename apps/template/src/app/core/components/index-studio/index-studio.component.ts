import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-studio',
  templateUrl: './index-studio.component.html',
  styleUrls: ['./index-studio.component.css']
})

/***
 * Index Studio Component
 */
export class IndexStudioComponent implements OnInit {
  navClass = 'bg-white';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /***
   * Login Model open
   */
  open(content) {
    this.modalService.open(content, { centered: true });
  }

}
