import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryUpdateComponent } from './category-form.component';
import { CategoryListComponent } from './category-list.component';
import { categoryRoute } from './category.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(categoryRoute)],
  declarations: [CategoryListComponent, CategoryUpdateComponent],
  entryComponents: [],
})
export class CategoryModule {}
