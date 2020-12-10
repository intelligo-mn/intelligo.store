import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildfoodSharedModule } from 'src/app/shared/shared.module';
import { OrganizationDeleteDialogComponent } from './organization-delete-dialog.component';
import { OrganizationDetailComponent } from './organization-detail.component';
import { OrganizationUpdateComponent } from './organization-update.component';
import { OrganizationComponent } from './organization.component';
import { organizationRoute } from './organization.route';

@NgModule({
  imports: [ChildfoodSharedModule, RouterModule.forChild(organizationRoute)],
  declarations: [OrganizationComponent, OrganizationDetailComponent, OrganizationUpdateComponent, OrganizationDeleteDialogComponent],
  entryComponents: [OrganizationDeleteDialogComponent],
})
export class OrganizationModule {}
