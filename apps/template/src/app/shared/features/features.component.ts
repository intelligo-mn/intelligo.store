import { Component, OnInit } from '@angular/core';

interface feature {
  icon: string;
  title: string;
};

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  /**
   * Clients Logo
   */
   featuresdata: feature[] = [
    {
      icon: "monitor",
      title: "Fully Responsive"
    },
    {
      icon: "heart",
      title: "Browser Compatibility"
    },
    {
      icon: "eye",
      title: "Retina Ready"
    },
    {
      icon: "bold",
      title: "Based On Bootstrap 5"
    },
    {
      icon: "feather",
      title: "Feather Icons"
    },
    {
      icon: "code",
      title: "Built With SASS"
    },
    {
      icon: "user-check",
      title: "W3c Valid Code"
    },
    {
      icon: "git-merge",
      title: "Flaticon Icons"
    },
    {
      icon: "settings",
      title: "Easy to customize"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
