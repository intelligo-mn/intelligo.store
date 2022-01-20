import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-password-reset',
  templateUrl: './email-password-reset.component.html',
  styleUrls: ['./email-password-reset.component.css']
})

/**
 * Email Password-Reset Component
 */
export class EmailPasswordResetComponent implements OnInit {

  //Get Year
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
