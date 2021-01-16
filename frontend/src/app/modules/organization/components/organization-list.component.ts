import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrganizationType } from 'src/app/shared/model/enums/organization-type.model';
import { IOrganization } from 'src/app/shared/model/organization.model';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
})
export class OrganizationListComponent implements OnInit {
  @Input() organizations: IOrganization[];
  @Input() type: OrganizationType;
  @Output() onDelete: EventEmitter<IOrganization>;
  constructor() {
    this.onDelete = new EventEmitter();
  }

  ngOnInit() {}

  delete(organization: IOrganization) {
    this.onDelete.emit(organization);
  }
}
