import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-task-management',
  templateUrl: './index-task-management.component.html',
  styleUrls: ['./index-task-management.component.css']
})
export class IndexTaskManagementComponent implements OnInit {
  navClass = 'nav-light';
  constructor() { }

  ngOnInit(): void {
  }

}
