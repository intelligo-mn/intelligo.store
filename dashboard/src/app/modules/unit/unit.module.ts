import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UnitDeleteDialogComponent } from './unit-delete-dialog.component';
import { UnitUpdateComponent } from './unit-update.component';
import { UnitComponent } from './unit.component';
import { unitRoute } from './unit.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(unitRoute)],
  declarations: [UnitComponent, UnitUpdateComponent, UnitDeleteDialogComponent],
  entryComponents: [UnitDeleteDialogComponent],
})
export class UnitModule {}
