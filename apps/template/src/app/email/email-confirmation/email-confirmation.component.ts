import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})

/**
 * Email Confirmation Component
 */
export class EmailConfirmationComponent implements OnInit {

  //Get Year
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
