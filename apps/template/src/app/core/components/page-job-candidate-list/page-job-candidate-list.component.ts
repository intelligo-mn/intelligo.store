import { Component, OnInit } from '@angular/core';

interface candidate {
  profile: string,
  name: string,
  designation: string,
  experience: number,
  list: string[],
};

@Component({
  selector: 'app-page-job-candidate-list',
  templateUrl: './page-job-candidate-list.component.html',
  styleUrls: ['./page-job-candidate-list.component.css']
})

/** 
* Page Job-Candidate-List Component 
*/
export class PageJobCandidateListComponent implements OnInit {

  /**
   * Candidate Data
   */
  candidatesData: candidate[] = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Calvin Carlo",
      designation: "Front-end Developer",
      experience: 3,
      list: ['PHP', "WordPress", "Web Design", "CSS", "JS"],
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Martha Griffin",
      designation: "WordPress Developer",
      experience: 3,
      list: ['PHP', "WordPress", "Web Design", "CSS", "JS"],
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Ashley Jen",
      designation: "Back-end Developer",
      experience: 3,
      list: ['PHP', "WordPress", "Web Design", "CSS", "JS"],
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Nicole Alan",
      designation: "UX Designer",
      experience: 3,
      list: ['PHP', "WordPress", "Web Design", "CSS", "JS"],
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Jennifer Pham",
      designation: "Web Designer",
      experience: 3,
      list: ['PHP', "WordPress", "Web Design", "CSS", "JS"],
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Alex Tom",
      designation: "UI Designer",
      experience: 3,
      list: ['PHP', "WordPress", "Web Design", "CSS", "JS"],
    },
    {
      profile: "assets/images/client/07.jpg",
      name: "Cristino Murphy",
      designation: "PHP Developer",
      experience: 3,
      list: ['PHP', "WordPress", "Web Design", "CSS", "JS"],
    },
    {
      profile: "assets/images/client/08.jpg",
      name: "Arlo Sons",
      designation: "React Developer",
      experience: 3,
      list: ['PHP', "WordPress", "Web Design", "CSS", "JS"],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
