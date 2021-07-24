import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ComponentsModule } from '@components/components.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogPostModule } from '@pages/blog-post/blog-post.module';
import { NewsletterSignupModule } from '@components/newsletter-signup/newsletter-signup.module';
import { TagsViewModule } from '@components/tags-view/tags-view.module';
import { ArticleModule } from '@components/article/article.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule,
    ComponentsModule,
    BlogPostModule,
    NewsletterSignupModule,
    TagsViewModule,
    ArticleModule,
  ],
})
export class BlogModule {}
