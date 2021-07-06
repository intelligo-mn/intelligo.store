import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganizationDeleteDialogComponent } from './organization-delete-dialog.component';
import { OrganizationUpdateComponent } from './organization-update.component';
import { OrganizationComponent } from './organization.component';
import { organizationRoute } from './organization.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(organizationRoute)],
  declarations: [OrganizationComponent, OrganizationUpdateComponent, OrganizationDeleteDialogComponent],
  entryComponents: [OrganizationDeleteDialogComponent],
})
export class OrganizationModule {}
