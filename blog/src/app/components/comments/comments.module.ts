import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [CommentsComponent],
  exports: [CommentsComponent],
  imports: [ScullyLibModule, CommonModule],
})
export class CommentsModule {}
