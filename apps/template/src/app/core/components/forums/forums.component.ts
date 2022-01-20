import { Component, OnInit } from '@angular/core';

interface form {
  title: string,
  content: string,
  post: string,
  topic: number,
  comments: number,
};

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})

/**
 * Forums Component
 */
export class ForumsComponent implements OnInit {

  /**
   * Forms Data
   */
  formData: form[] = [
    {
      title: "Introductions: Landrick",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Calvin",
      topic: 3,
      comments: 5
    },
    {
      title: "Web Designing and Developing",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "George",
      topic: 3,
      comments: 5
    },
    {
      title: "Hosting and providers",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Parthiv",
      topic: 3,
      comments: 5
    },
    {
      title: "SEO starter guide",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "David",
      topic: 3,
      comments: 5
    },
    {
      title: "Troubleshooting and managing issues",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Tiger",
      topic: 3,
      comments: 5
    },
    {
      title: "Backup and restore",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Cristina",
      topic: 3,
      comments: 5
    },
    {
      title: "Errors and how to fix them",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Miriam",
      topic: 3,
      comments: 5
    },
    {
      title: "Template features & Services",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Janalia",
      topic: 3,
      comments: 5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
