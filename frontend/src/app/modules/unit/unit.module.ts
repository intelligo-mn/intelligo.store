import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitFormComponent } from './unit-form/unit-form.component';
import { UnitComponent } from './unit.component';



@NgModule({
  declarations: [UnitFormComponent, UnitComponent],
  imports: [
    CommonModule
  ]
})
export class UnitModule { }
