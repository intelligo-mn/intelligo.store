import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-invoice',
  templateUrl: './email-invoice.component.html'
})

/**
 * Email Invoice Component
 */
export class EmailInvoiceComponent implements OnInit {

  //Get Year
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
