import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IContact } from 'src/app/shared/model/contact.model';
import { ContactService } from './contact.service';

@Component({
  templateUrl: './contact-delete-dialog.component.html',
})
export class ContactDeleteDialogComponent {
  contact?: IContact;

  constructor(protected contactService: ContactService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.contactService.delete(id).subscribe(() => {
      this.eventManager.broadcast('contactListModification');
      this.activeModal.close();
    });
  }
}
