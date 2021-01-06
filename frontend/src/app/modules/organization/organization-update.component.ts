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
import { ContactService } from 'src/app/modules/organization/contact.service';
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
    status: [null, [Validators.required]],
    type: [null, [Validators.required]],
    contact: this.fb.group({
      phone: [],
      email: [],
      address: [],
      lat: [],
      lon: [],
    }),
    distributeType: [],
    manager: [],
  });

  constructor(
    protected organizationService: OrganizationService,
    protected contactService: ContactService,
    protected categoryService: CategoryService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    if (this.organization) {
      this.contactService
        .find(this.organization?.id)
        .pipe(
          map((res: HttpResponse<IContact>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: IContact) => {
          if (!this.organization?.contact || !this.organization?.contact?.id) {
            this.organization.contact = resBody;
            this.editForm.patchValue(this.organization);
          }
        });
    }

    this.categoryService.query().subscribe((res: HttpResponse<ICategory[]>) => (this.categories = res.body || []));

    this.userService.query().subscribe((res: HttpResponse<IUser[]>) => (this.customers = res.body || []));
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const organization = this.editForm.value();
    debugger;
    if (organization?.id !== undefined || organization?.id !== null) {
      organization.id = undefined;
      debugger;
      this.subscribeToSaveResponse(this.organizationService.update(organization));
    } else {
      debugger;
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
