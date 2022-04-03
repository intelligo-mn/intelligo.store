import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-developer',
  templateUrl: './index-developer.component.html',
  styleUrls: ['./index-developer.component.css']
})
export class IndexDeveloperComponent implements OnInit {

  /**
   * Nav Button Add
   */
  isdeveloper = true;

  constructor() { }

  ngOnInit(): void {
  }

}
