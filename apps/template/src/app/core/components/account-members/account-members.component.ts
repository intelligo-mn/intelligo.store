import { Component, OnInit } from '@angular/core';

interface member {
  profile: string,
  list: string[],
  name: string
};

@Component({
  selector: 'app-account-members',
  templateUrl: './account-members.component.html',
  styleUrls: ['./account-members.component.css']
})

/**
 * Accopunt Members Component
 */
export class AccountMembersComponent implements OnInit {

  /**
   * Member Data
   */
  memberData: member[] = [
    {
      profile: "assets/images/client/01.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Calvin Carlo"
    },
    {
      profile: "assets/images/client/02.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Calvin Carlo"
    },
    {
      profile: "assets/images/client/03.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Calvin Carlo"
    },
    {
      profile: "assets/images/client/04.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Calvin Carlo"
    },
    {
      profile: "assets/images/client/05.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Calvin Carlo"
    },
    {
      profile: "assets/images/client/06.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Calvin Carlo"
    },
    {
      profile: "assets/images/client/07.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Calvin Carlo"
    },
    {
      profile: "assets/images/client/08.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Calvin Carlo"
    }
  ];

  /**
   * Nav light class Add
   */
  navClass = 'nav-light';

  constructor() { }

  ngOnInit(): void {
  }

}
