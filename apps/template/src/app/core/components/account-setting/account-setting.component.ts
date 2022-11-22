import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})

/**
 * Account Setting Component
 */
export class AccountSettingComponent implements OnInit {

  /**
   * Nav Light Class Add
   */
  navClass = 'nav-light';

  constructor() { }

  ngOnInit(): void {
  }

}
