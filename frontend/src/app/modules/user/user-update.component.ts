import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventManager } from '@devmn/event-manager';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/core/user/user.model';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'user-mgmt-update',
  templateUrl: './user-update.component.html',
})
export class UserUpdateComponent implements OnInit {
  user!: User;
  @Input() defaultUser!: User;
  authorities: any[] = [];
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    login: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*')]],
    firstName: ['', []],
    lastName: ['', []],
    email: ['', [Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    activated: [],
    langKey: ['MN'],
    authorities: [],
  });

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private eventManager: EventManager
  ) {}

  ngOnInit(): void {
    if (this.defaultUser) {
      this.user = this.defaultUser;
      if (!this.user?.id) {
        this.user.activated = true;
      }
      this.updateForm(this.user);
    }

    this.userService.authorities().subscribe(authorities => {
      this.authorities = authorities;
    });
  }

  save(): void {
    this.isSaving = true;
    this.user = this.editForm.value;
    if (this.user.id) {
      this.userService.update(this.user).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    } else {
      this.user.id = undefined;
      this.userService.create(this.user).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    }
  }

  private updateForm(user: User): void {
    this.editForm.patchValue({
      id: user.id,
      login: user.login,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      activated: user.activated,
      langKey: user.langKey,
      authorities: user.authorities,
    });
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.activeModal.close();
    this.eventManager.broadcast('userListModification');
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}
