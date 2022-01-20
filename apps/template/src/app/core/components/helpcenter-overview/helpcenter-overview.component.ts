import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpcenter-overview',
  templateUrl: './helpcenter-overview.component.html',
  styleUrls: ['./helpcenter-overview.component.css']
})

/**
 * Helpcenter Overview Component
 */
export class HelpcenterOverviewComponent implements OnInit {
  hideFooter = true;
  constructor() { }

  ngOnInit(): void {
  }

}
