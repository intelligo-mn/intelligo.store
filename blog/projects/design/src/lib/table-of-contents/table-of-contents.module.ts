import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOfContentsComponent } from './table-of-contents.component';
import { ScullyContentModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TableOfContentsComponent],
  exports: [TableOfContentsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ScullyContentModule
  ]
})
export class TableOfContentsModule { }
