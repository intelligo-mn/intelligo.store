import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface member {
  profile: string,
  list: string[],
  name: string,
  designation: string,
};

@Component({
  selector: 'app-page-aboutus',
  templateUrl: './page-aboutus.component.html',
  styleUrls: ['./page-aboutus.component.css']
})

/**
 * Aboutus Component
 */
export class PageAboutusComponent implements OnInit {

  /**
   * Member Data
   */
  memberData: member[] = [
    {
      profile: "assets/images/client/01.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Ronny Jofra",
      designation: "C.E.O"
    },
    {
      profile: "assets/images/client/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Micheal Carlo",
      designation: "Director"
    },
    {
      profile: "assets/images/client/02.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Aliana Rosy",
      designation: "Manager"
    },
    {
      profile: "assets/images/client/03.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Sofia Razaq",
      designation: "Developer"
    }
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}
