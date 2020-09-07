import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { AuthorsRoutingModule } from './authors-routing.module';
import { ComponentsModule } from '@components/components.module';
import { AuthorModule } from '@pages/author/author.module';
import { NewsletterSignupModule } from '@components/newsletter-signup/newsletter-signup.module';
import { AuthorCardModule } from '@components/author/author.module';

@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    AuthorModule,
    ComponentsModule,
    NewsletterSignupModule,
    AuthorCardModule,
  ],
})
export class AuthorsModule {}
