import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-alert',
  templateUrl: './email-alert.component.html',
  styleUrls: ['./email-alert.component.css']
})

/**
 * Email Alert Component
 */
export class EmailAlertComponent implements OnInit {

  //Get Year
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
