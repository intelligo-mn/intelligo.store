import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterSignupComponent } from './newsletter-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NizPrimaryButtonModule,
  NizInputModule,
  NizInlineSvgModule,
} from '@notiz/ngx-design';

@NgModule({
  declarations: [NewsletterSignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NizPrimaryButtonModule,
    NizInputModule,
    NizInlineSvgModule,
  ],
  exports: [NewsletterSignupComponent],
  providers: [],
})
export class NewsletterSignupModule {}
