import { Component, OnInit } from '@angular/core';

interface jobSideBar {
  image: string,
  message: string,
  designation: string,
  icon: string,
  name: string,
  location: string,
  list: string[],
};
@Component({
  selector: 'app-page-jobs-sidebar',
  templateUrl: './page-jobs-sidebar.component.html',
  styleUrls: ['./page-jobs-sidebar.component.css']
})

/**
 * Page Jobs Sidebar Component
 */
export class PageJobsSidebarComponent implements OnInit {

  /**
   * Jobs Sidebar Data
   */
  jobsSideBarsData: jobSideBar[] = [
    {
      image: "assets/images/job/full.jpg",
      designation: "Web Designer",
      message: "Full Time",
      icon: "assets/images/job/Circleci.svg",
      name: "CircleCi",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    },
    {
      image: "assets/images/job/full.jpg",
      designation: "Web Developer",
      message: "Full Time",
      icon: "assets/images/job/Codepen.svg",
      name: "Codepen",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    },
    {
      image: "assets/images/job/part.jpg",
      designation: "UX Designer",
      message: "Part Time",
      icon: "assets/images/job/Discord.svg",
      name: "Discord",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    },
    {
      image: "assets/images/job/full.jpg",
      designation: "UI Designer",
      message: "Full Time",
      icon: "assets/images/job/Eslint.svg",
      name: "Eslint",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    },
    {
      image: "assets/images/job/remote.jpg",
      designation: "Back-End Developer",
      message: "Remote",
      icon: "assets/images/job/Gitlab.svg",
      name: "Gitlab",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    },
    {
      image: "assets/images/job/part.jpg",
      designation: "Photographer",
      message: "Full Time",
      icon: "assets/images/job/Gradle.svg",
      name: "Gradle",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    },
    {
      image: "assets/images/job/full.jpg",
      designation: "Mechanic",
      message: "Full Time",
      icon: "assets/images/job/Mg.svg",
      name: "Mg",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    },
    {
      image: "assets/images/job/part.jpg",
      designation: "Frontend Developer",
      message: "Part Time",
      icon: "assets/images/job/Sketch.svg",
      name: "Sketch",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    },
    {
      image: "assets/images/job/remote.jpg",
      designation: "Web Designer",
      message: "Remote",
      icon: "assets/images/job/Twilio.svg",
      name: "Twilio",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    },
    {
      image: "assets/images/job/part.jpg",
      designation: "Php Developer",
      message: "Part Time",
      icon: "assets/images/job/Udemy.svg",
      name: "Udemy",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    },
    {
      image: "assets/images/job/full.jpg",
      designation: "Web Designer",
      message: "Full Time",
      icon: "assets/images/job/Webhooks.svg",
      name: "Webhooks",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    },
    {
      image: "assets/images/job/remote.jpg",
      designation: "Python Developer",
      message: "Remote",
      icon: "assets/images/job/Circleci.svg",
      name: "Circleci",
      location: "San Francisco",
      list: ['2 Year Expirence', "Working Hours- 6hr", "Information strategy"]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
