import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface candidate {
  image: string,
  name: string,
  designation: string,
};

@Component({
  selector: 'app-page-job-candidate',
  templateUrl: './page-job-candidate.component.html',
  styleUrls: ['./page-job-candidate.component.css']
})

/**
 * Page Job-Candidate Component
 */
export class PageJobCandidateComponent implements OnInit {

  /**
   * Nav Light Class Add
   */
  navClass = 'nav-light';

  /**
   * Member Data
   */
  candidatesData: candidate[] = [
    {
      image: "assets/images/work/1.jpg",
      name: "Iphone mockup",
      designation: "Branding"
    },
    {
      image: "assets/images/work/2.jpg",
      name: "Mockup Collection",
      designation: "Mockup"
    },
    {
      image: "assets/images/work/3.jpg",
      name: "Abstract images",
      designation: "Abstract"
    },
    {
      image: "assets/images/work/4.jpg",
      name: "Yellow bg with Books",
      designation: "Books"
    }
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openModal(content) {
    this.modalService.open(content, { centered: true });
  }


}
