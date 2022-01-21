import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-task-management',
  templateUrl: './index-task-management.component.html',
  styleUrls: ['./index-task-management.component.css']
})

/***
 * Task Management Component
 */
export class IndexTaskManagementComponent implements OnInit {

  /***
   * nav bg color add
   */
  navClass = 'nav-light';

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-airplay h1 text-primary",
      title: "Easy To Use",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a eleifend Aliquamaenean elementum semper."
    },
    {
      icon: "uil uil-envelope-shield h1 text-primary",
      title: "Secure",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    },
    {
      icon: "uil uil-edit-alt h1 text-primary",
      title: "Flexible",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
