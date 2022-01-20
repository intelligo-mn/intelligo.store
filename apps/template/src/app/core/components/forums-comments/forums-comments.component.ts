import { Component, OnInit } from '@angular/core';

interface form {
  profile: string,
  name: string,
  date: string,
  time: string,
  content: string,
};

@Component({
  selector: 'app-forums-comments',
  templateUrl: './forums-comments.component.html',
  styleUrls: ['./forums-comments.component.css']
})

/**
 * Forums Comments Component
 */
export class ForumsCommentsComponent implements OnInit {

  /**
   * Form data
   */
   formData: form[] = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Calvin Carlo",
      date: "16th August, 2019",
      time: "03:44 pm",
      content: "Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available."
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Crista Joseph",
      date: "16th August, 2019",
      time: "03:44 pm",
      content: "Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available."
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "George Meta",
      date: "16th August, 2019",
      time: "03:44 pm",
      content: "Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
