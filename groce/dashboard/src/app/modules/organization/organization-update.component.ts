import { Component, Input, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IOrganization, Organization } from 'src/app/shared/model/organization.model';
import { OrganizationService } from './organization.service';
import { IContact } from 'src/app/shared/model/contact.model';
import { ICategory } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/modules/category/category.service';
import { ICustomer } from 'src/app/shared/model/customer.model';
import { UserService } from 'src/app/core/user/user.service';
import { IUser } from 'src/app/core/user/user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

type SelectableEntity = IContact | ICategory | ICustomer;

@Component({
  selector: 'organization-update',
  templateUrl: './organization-update.component.html',
})
export class OrganizationUpdateComponent implements OnInit {
  @Input() organization: IOrganization;
  isSaving = false;
  categories: ICategory[] = [];
  customers: ICustomer[] = [];

  editForm = this.fb.group({
    id: [],
    name: [null, [Validators.required]],
    phone: [],
    email: [],
    lat: [],
    lon: [],
  });

  constructor(
    protected organizationService: OrganizationService,
    protected categoryService: CategoryService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const organization = this.editForm.value;

    if (organization?.id !== undefined || organization?.id !== null) {
      organization.id = undefined;

      this.subscribeToSaveResponse(this.organizationService.update(organization));
    } else {
      this.subscribeToSaveResponse(this.organizationService.create(organization));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrganization>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
