import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SidebarTagsComponent } from './sidebar/sidebar-tags/sidebar-tags.component';
import { SidebarAdvertisementComponent } from './sidebar/sidebar-advertisement/sidebar-advertisement.component';
import { SidebarSocialLinksComponent } from './sidebar/sidebar-social-links/sidebar-social-links.component';
import { FeaturedArticleComponent } from './articles/featured-article/featured-article.component';
import { ArticleCardComponent } from './articles/article-card/article-card.component';
import { ArticleContainerComponent } from './articles/article-container/article-container.component';
import { ArticleHeaderComponent } from './articles/article-header/article-header.component';
import { HomeComponent } from './home.component';
import { LetModule, PushModule } from '@rx-angular/template';
import { DateagoPipe } from 'src/app/global/pipes/dateago/dateago.pipe';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarTagsComponent,
    SidebarAdvertisementComponent,
    SidebarSocialLinksComponent,
    FeaturedArticleComponent,
    ArticleCardComponent,
    ArticleContainerComponent,
    ArticleHeaderComponent,
    HomeComponent,
    DateagoPipe
  ],
  imports: [
    LetModule,
    PushModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
