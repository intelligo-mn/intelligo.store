import { Component, OnInit } from '@angular/core';

import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-account-payments',
  templateUrl: './account-payments.component.html'
})

/**
 * Account Payments Component
 */
export class AccountPaymentsComponent implements OnInit {

  /**
   * Nav Light Class Add
   */
  navClass = 'nav-light';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}
