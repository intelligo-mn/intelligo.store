import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventManager } from '@devmn/event-manager';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { CategoryService } from 'src/app/modules/category/category.service';
import { ICategory } from 'src/app/shared/model/category.model';
import { IContact } from 'src/app/shared/model/contact.model';
import { OrganizationStatus } from 'src/app/shared/model/enums/organization-status.model';
import { IOrganization } from 'src/app/shared/model/organization.model';
import { IUser } from 'src/app/shared/model/user.model';
import { UserUpdateComponent } from '../user/user-form.component';
import { OrganizationService } from './organization.service';

type SelectableEntity = IContact | ICategory | IUser;

@Component({
  selector: 'organization-update',
  templateUrl: './organization-update.component.html',
})
export class OrganizationUpdateComponent implements OnInit {
  @Input() organization: IOrganization;
  isSaving = false;
  categories: ICategory[] = [];
  users: IUser[] = [];
  managers: IUser[] = [];
  userEventSubscriber?: Subscription;

  editForm = this.fb.group({
    id: [],
    name: [null, [Validators.required]],
    status: [OrganizationStatus.ACTIVE, [Validators.required]],
    type: [null, [Validators.required]],
    phone: [],
    email: [],
    address: [],
    distributeType: [],
    user: [],
    manager: [],
  });

  constructor(
    protected organizationService: OrganizationService,
    protected categoryService: CategoryService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private eventManager: EventManager,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if (this.organization) {
      this.editForm.patchValue(this.organization);
    }

    this.categoryService.query().subscribe((res: HttpResponse<ICategory[]>) => (this.categories = res.body || []));

    this.userService.query().subscribe((res: HttpResponse<IUser[] | any>) => {
      this.users = res.body || [];
    });
    this.subscribeUserChanged()
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const organization: IOrganization = this.editForm?.value;

    if (organization?.id) {
      this.subscribeToSaveResponse(this.organizationService.update(organization));
    } else {
      organization.id = undefined;
      organization.distributeType = organization.distributeType ? organization.distributeType : undefined;
      this.subscribeToSaveResponse(this.organizationService.create(organization));
    }
  }

  subscribeUserChanged(): void {
    this.userEventSubscriber = this.eventManager.subscribe('userListChanged', () => {
      this.userService.query().subscribe((res: HttpResponse<IUser[] | any>) => {
        this.users = res.body || [];
      });
    });
  }

  createUser() {
    const inst = this.modalService.open(UserUpdateComponent, { size: 'lg' });
    inst.result.then(res => {
      this.activeModal.dismiss('Cross click');
    });
  }
  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrganization>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.activeModal.close();
    this.eventManager.broadcast('organizationListModification');
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
