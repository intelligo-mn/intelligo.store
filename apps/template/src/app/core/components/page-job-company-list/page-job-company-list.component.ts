import { Component, OnInit } from '@angular/core';

interface company {
  icon: string,
  name: string,
  service: string,
};

@Component({
  selector: 'app-page-job-company-list',
  templateUrl: './page-job-company-list.component.html',
  styleUrls: ['./page-job-company-list.component.css']
})
export class PageJobCompanyListComponent implements OnInit {

  /**
   * Member Data
   */
  companysData: company[] = [
    {
      icon: "assets/images/job/Circleci.svg",
      name: "CircleCi",
      service: "Internet Services"
    },
    {
      icon: "assets/images/job/Mg.svg",
      name: "Mg",
      service: "Internet Services"
    },
    {
      icon: "assets/images/job/Twilio.svg",
      name: "Twilio",
      service: "Internet Services"
    },
    {
      icon: "assets/images/job/Udemy.svg",
      name: "Udemy",
      service: "Internet Services"
    },
    {
      icon: "assets/images/job/Webhooks.svg",
      name: "Webhooks",
      service: "Internet Services"
    },
    {
      icon: "assets/images/job/Discord.svg",
      name: "Discord",
      service: "Internet Services"
    },
    {
      icon: "assets/images/job/Eslint.svg",
      name: "Eslint",
      service: "Internet Services"
    },
    {
      icon: "assets/images/job/Gitlab.svg",
      name: "Gitlab",
      service: "Internet Services"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
