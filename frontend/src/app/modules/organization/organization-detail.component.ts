import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IOrganization } from 'src/app/shared/model/organization.model';

@Component({
  selector: 'organization-detail',
  templateUrl: './organization-detail.component.html'
})
export class OrganizationDetailComponent implements OnInit {
  organization: IOrganization | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ organization }) => (this.organization = organization));
  }

  previousState(): void {
    window.history.back();
  }
}
