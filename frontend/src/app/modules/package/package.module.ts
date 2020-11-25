import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from './package.component';
import { PackageFormComponent } from './package-form/package-form.component';



@NgModule({
  declarations: [PackageComponent, PackageFormComponent],
  imports: [
    CommonModule
  ]
})
export class PackageModule { }
