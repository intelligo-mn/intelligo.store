import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { OrganizationFormComponent } from './organization-form/organization-form.component';



@NgModule({
  declarations: [OrganizationComponent, OrganizationFormComponent],
  imports: [
    CommonModule
  ]
})
export class OrganizationModule { }
