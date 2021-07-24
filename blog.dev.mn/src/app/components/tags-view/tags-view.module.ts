import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsViewComponent } from './tags-view.component';
import { RouterModule } from '@angular/router';
import { NizChipModule } from '@notiz/ngx-design';

@NgModule({
  declarations: [TagsViewComponent],
  imports: [CommonModule, RouterModule, NizChipModule],
  exports: [TagsViewComponent],
  providers: [],
})
export class TagsViewModule {}
