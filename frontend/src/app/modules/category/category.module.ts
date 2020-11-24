import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryFormComponent } from './category-form/category-form.component';



@NgModule({
  declarations: [CategoryComponent, CategoryFormComponent],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
