import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-invoice',
  templateUrl: './page-invoice.component.html',
  styleUrls: ['./page-invoice.component.css']
})
export class PageInvoiceComponent implements OnInit {

  hideFooter = true;

  constructor() { }

  ngOnInit(): void {
  }

}
