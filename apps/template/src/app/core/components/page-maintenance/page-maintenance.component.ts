import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-maintenance',
  templateUrl: './page-maintenance.component.html',
  styleUrls: ['./page-maintenance.component.css']
})

/**
 * Page Maintenance Component
 */
export class PageMaintenanceComponent implements OnInit {

  display: any;
  constructor() {
    this.timer(10);
  }
 
  ngOnInit(): void {
  }

  timer(minute) {
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
    }, 1000);
  }
}
