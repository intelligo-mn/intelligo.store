import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildfoodSharedModule } from 'src/app/shared/shared.module';
import { UnitDeleteDialogComponent } from './unit-delete-dialog.component';
import { UnitDetailComponent } from './unit-detail.component';
import { UnitUpdateComponent } from './unit-update.component';
import { UnitComponent } from './unit.component';
import { unitRoute } from './unit.route';

@NgModule({
  imports: [ChildfoodSharedModule, RouterModule.forChild(unitRoute)],
  declarations: [UnitComponent, UnitDetailComponent, UnitUpdateComponent, UnitDeleteDialogComponent],
  entryComponents: [UnitDeleteDialogComponent],
})
export class UnitModule {}
