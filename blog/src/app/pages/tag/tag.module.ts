import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { ComponentsModule } from '@components/components.module';
import { TagComponent } from './tag.component';
import { NewsletterSignupModule } from '@components/newsletter-signup/newsletter-signup.module';
import { BreadcrumbModule } from '@components/breadcrumb/breadcrumb.module';
import { ArticleModule } from '@components/article/article.module';
import { FeaturedModule } from '@components/featured/featured.module';

@NgModule({
  declarations: [TagComponent],
  imports: [
    CommonModule,
    ScullyLibModule,
    ComponentsModule,
    NewsletterSignupModule,
    BreadcrumbModule,
    ArticleModule,
    FeaturedModule
  ],
})
export class TagModule {}
