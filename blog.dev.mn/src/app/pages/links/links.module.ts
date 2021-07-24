import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksRoutingModule } from './links-routing.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ComponentsModule } from '@components/components.module';
import { NewsletterSignupModule } from '@components/newsletter-signup/newsletter-signup.module';
import { BlogPostModule } from '@pages/blog-post/blog-post.module';

@NgModule({
  imports: [
    BlogPostModule,
    CommonModule,
    LinksRoutingModule,
    ScullyLibModule,
    ComponentsModule,
    NewsletterSignupModule,
  ],
  exports: [],
  providers: [],
})
export class LinksModule {}
