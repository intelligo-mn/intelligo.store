import { Component, Input, OnInit } from '@angular/core';
import { IOrganization } from 'src/app/shared/model/organization.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

  @Input() organizations: IOrganization[]

  constructor() { }

  ngOnInit() {
  }

}
