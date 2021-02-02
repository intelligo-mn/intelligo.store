import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrganizationType } from 'src/app/shared/model/enums/organization-type.model';
import { IOrganization } from 'src/app/shared/model/organization.model';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
})
export class OrganizationListComponent implements OnInit {
  @Input() organizations: IOrganization[];
  @Input() type: OrganizationType | string;
  @Output() onDelete: EventEmitter<IOrganization>;
  @Output() onEdit: EventEmitter<IOrganization>;
  constructor() {
    this.onDelete = new EventEmitter();
    this.onEdit = new EventEmitter();
  }

  ngOnInit() {}

  delete(organization: IOrganization) {
    this.onDelete.emit(organization);
  }

  edit(organization: IOrganization) {
    this.onEdit.emit(organization);
  }
}
