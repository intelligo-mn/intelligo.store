import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventManager } from '@devmn/event-manager';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { IUnit } from 'src/app/shared/model/unit.model';
import { UnitService } from './unit.service';

@Component({
  selector: 'unit-update',
  templateUrl: './unit-update.component.html',
})
export class UnitUpdateComponent implements OnInit {
  @Input() unit: IUnit;
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    name: [null, [Validators.required]],
    description: [],
    value: [],
  });

  constructor(
    protected unitService: UnitService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private eventManager: EventManager
  ) {}

  ngOnInit(): void {
    if (this.unit) {
      this.editForm.patchValue(this.unit);
    }
  }

  save(): void {
    this.isSaving = true;
    const unit = this.editForm.value;
    if (unit.id) {
      this.subscribeToSaveResponse(this.unitService.update(unit));
    } else {
      unit.id = undefined;
      this.subscribeToSaveResponse(this.unitService.create(unit));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IUnit>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.activeModal.close();
    this.eventManager.broadcast('unitListModification');
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
