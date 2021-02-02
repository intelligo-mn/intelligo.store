import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from '../user/user.module';
import { OrganizationListComponent } from './components/organization-list.component';
import { OrganizationDeleteDialogComponent } from './organization-delete-dialog.component';
import { OrganizationDetailComponent } from './organization-detail.component';
import { OrganizationUpdateComponent } from './organization-update.component';
import { OrganizationComponent } from './organization.component';
import { organizationRoute } from './organization.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(organizationRoute), UserModule],
  declarations: [
    OrganizationComponent,
    OrganizationDetailComponent,
    OrganizationUpdateComponent,
    OrganizationDeleteDialogComponent,
    OrganizationListComponent,
  ],
  entryComponents: [OrganizationDeleteDialogComponent],
})
export class OrganizationModule {}
