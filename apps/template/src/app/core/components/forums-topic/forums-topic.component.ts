import { Component, OnInit } from '@angular/core';

interface form {
  title: string,
  post: string,
  comments: number,
};

@Component({
  selector: 'app-forums-topic',
  templateUrl: './forums-topic.component.html',
  styleUrls: ['./forums-topic.component.css']
})

/**
 * Forums Topic Component
 */
export class ForumsTopicComponent implements OnInit {

  /**
   * Form data
   */
  formData: form[] = [
    {
      title: "Changelog",
      post: "Calvin Carlo",
      comments: 2
    },
    {
      title: "Documentation",
      post: "George Meta",
      comments: 4
    },
    {
      title: "Components",
      post: "Crista Joseph",
      comments: 1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
