import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserComponent } from './user-list.component';
import { UserUpdateComponent } from './user-form.component';
import { UserDeleteDialogComponent } from './user-delete-dialog.component';
import { userManagementRoute } from './user.route';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(userManagementRoute)],
  declarations: [
    UserComponent,
    UserUpdateComponent,
    UserDeleteDialogComponent
  ],
  entryComponents: [UserDeleteDialogComponent]
})
export class UserModule {}
