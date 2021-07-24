import { NizChipModule, NizInlineSvgModule } from '@notiz/ngx-design';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';

@NgModule({
  declarations: [AuthorComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forChild(),
    NizChipModule,
    NizInlineSvgModule,
  ],
  exports: [AuthorComponent],
  providers: [],
})
export class AuthorCardModule {}
