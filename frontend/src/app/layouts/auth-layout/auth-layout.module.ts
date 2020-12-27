import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../modules/login/login.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild([{ path: 'login', component: LoginComponent }]), NgbModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthLayoutModule {
  constructor() {
    debugger;
  }
}
