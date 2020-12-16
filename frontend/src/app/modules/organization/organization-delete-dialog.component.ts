import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IOrganization } from 'src/app/shared/model/organization.model';
import { OrganizationService } from './organization.service';

@Component({
  templateUrl: './organization-delete-dialog.component.html',
})
export class OrganizationDeleteDialogComponent {
  organization?: IOrganization;

  constructor(
    protected organizationService: OrganizationService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.organizationService.delete(id).subscribe(() => {
      this.eventManager.broadcast('organizationListModification');
      this.activeModal.close();
    });
  }
}
