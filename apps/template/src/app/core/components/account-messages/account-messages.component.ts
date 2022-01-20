import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface message {
  profile: string,
  name: string,
  content: string,
};

@Component({
  selector: 'app-account-messages',
  templateUrl: './account-messages.component.html',
  styleUrls: ['./account-messages.component.css']
})

/**
 * Account Message Component
 */
export class AccountMessagesComponent implements OnInit {

  /**
   * Ck Editer set
   */
  public Editor = ClassicEditor;

  /**
   * Nav Light Class Add
   */
  navClass = 'nav-light';

  /**
   * Member Data
   */
  messageData: message[] = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Calvin Carlo",
      content: "This is required when, for example, the final text is not yet available. Dummy"
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Miriam Walya",
      content: "This is required when, for example, the final text is not yet available. Dummy"
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Jenelia Parker",
      content: "This is required when, for example, the final text is not yet available. Dummy"
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Jack Deo",
      content: "This is required when, for example, the final text is not yet available. Dummy"
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Marya Joseph",
      content: "This is required when, for example, the final text is not yet available. Dummy"
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Maninder Khan",
      content: "This is required when, for example, the final text is not yet available. Dummy"
    },
    {
      profile: "assets/images/client/07.jpg",
      name: "Pitambar Das",
      content: "This is required when, for example, the final text is not yet available. Dummy"
    },
    {
      profile: "assets/images/client/08.jpg",
      name: "Cristino Murfy",
      content: "This is required when, for example, the final text is not yet available. Dummy"
    }
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openComposeModal(content: any) {
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }

}
