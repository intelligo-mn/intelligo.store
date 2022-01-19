import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-maintenance',
  templateUrl: './page-maintenance.component.html',
  styleUrls: ['./page-maintenance.component.css']
})
export class PageMaintenanceComponent implements OnInit {

  constructor() { }
  hour;
  minute;
  second;
  ngOnInit(): void {
    this.todo();
  }
  // tslint:disable-next-line: typedef
  todo() {
    let v = this;
    setInterval(() => {
      const countDownDate = new Date('Jan 1, 2021 15:37:25').getTime();
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      v.hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      v.minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      v.second = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }
}
