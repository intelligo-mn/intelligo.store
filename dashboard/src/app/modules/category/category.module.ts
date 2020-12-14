import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryUpdateComponent } from './category-update.component';
import { CategoryComponent } from './category.component';
import { categoryRoute } from './category.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(categoryRoute)],
  declarations: [CategoryComponent, CategoryUpdateComponent],
  entryComponents: [],
})
export class CategoryModule {}
