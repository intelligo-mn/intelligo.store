import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventManager } from '@devmn/event-manager';

import { IUnit } from 'src/app/shared/model/unit.model';
import { UnitService } from './unit.service';

@Component({
  templateUrl: './unit-delete-dialog.component.html',
})
export class UnitDeleteDialogComponent {
  unit?: IUnit;

  constructor(protected unitService: UnitService, public activeModal: NgbActiveModal, protected eventManager: EventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.unitService.delete(id).subscribe(() => {
      this.eventManager.broadcast('unitListModification');
      this.activeModal.close();
    });
  }
}
