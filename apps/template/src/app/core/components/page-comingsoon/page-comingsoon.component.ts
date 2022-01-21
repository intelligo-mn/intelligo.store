import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-page-comingsoon',
  templateUrl: './page-comingsoon.component.html',
  styleUrls: ['./page-comingsoon.component.css']
})

/**
 * Page ComingSoon Component
 */
export class PageComingsoonComponent implements OnInit {

  constructor() { }
  private _trialEndsAt;

  private _diff: number;
  _days: number;
  _hours: number;
  _minutes: number;
  _seconds: number;
  ngOnInit(): void {
    this._trialEndsAt = "2022-12-24";

    interval(3000).pipe(
      map((x) => {
        this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
      })).subscribe((x) => {
        this._days = this.getDays(this._diff);
        this._hours = this.getHours(this._diff);
        this._minutes = this.getMinutes(this._diff);
        this._seconds = this.getSeconds(this._diff);
      });
  }

  /**
   * Get Date & Time
   */
  getDays(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  getHours(t) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  getSeconds(t) {
    return Math.floor((t / 1000) % 60);
  }

}
