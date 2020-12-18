import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IOrganization, Organization } from 'src/app/shared/model/organization.model';
import { OrganizationService } from './organization.service';
import { IContact } from 'src/app/shared/model/contact.model';
import { ContactService } from 'src/app/modules/contact/contact.service';
import { ICategory } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/modules/category/category.service';
import { ICustomer } from 'src/app/shared/model/customer.model';
import { UserService } from 'src/app/core/user/user.service';
import { IUser } from 'src/app/core/user/user.model';

type SelectableEntity = IContact | ICategory | ICustomer;

@Component({
  selector: 'organization-update',
  templateUrl: './organization-update.component.html',
})
export class OrganizationUpdateComponent implements OnInit {
  isSaving = false;
  contacts: IContact[] = [];
  categories: ICategory[] = [];
  customers: ICustomer[] = [];

  editForm = this.fb.group({
    id: [],
    name: [null, [Validators.required]],
    status: [null, [Validators.required]],
    type: [null, [Validators.required]],
    contact: [],
    distributeType: [],
    manager: [],
  });

  constructor(
    protected organizationService: OrganizationService,
    protected contactService: ContactService,
    protected categoryService: CategoryService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ organization }) => {
      this.updateForm(organization);

      this.contactService
        .query({ filter: 'organization-is-null' })
        .pipe(
          map((res: HttpResponse<IContact[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: IContact[]) => {
          if (!organization.contact || !organization.contact.id) {
            this.contacts = resBody;
          } else {
            this.contactService
              .find(organization.contact.id)
              .pipe(
                map((subRes: HttpResponse<IContact>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: IContact[]) => (this.contacts = concatRes));
          }
        });

      this.categoryService.query().subscribe((res: HttpResponse<ICategory[]>) => (this.categories = res.body || []));

      this.userService.query().subscribe((res: HttpResponse<IUser[]>) => (this.customers = res.body || []));
    });
  }

  updateForm(organization: IOrganization): void {
    this.editForm.patchValue({
      id: organization.id,
      name: organization.name,
      status: organization.status,
      type: organization.type,
      contact: organization.contact,
      distributeType: organization.distributeType,
      manager: organization.manager,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const organization = this.createFromForm();
    if (organization.id !== undefined) {
      this.subscribeToSaveResponse(this.organizationService.update(organization));
    } else {
      this.subscribeToSaveResponse(this.organizationService.create(organization));
    }
  }

  private createFromForm(): IOrganization {
    return {
      ...new Organization(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      status: this.editForm.get(['status'])!.value,
      type: this.editForm.get(['type'])!.value,
      contact: this.editForm.get(['contact'])!.value,
      distributeType: this.editForm.get(['distributeType'])!.value,
      manager: this.editForm.get(['manager'])!.value,
    };
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
