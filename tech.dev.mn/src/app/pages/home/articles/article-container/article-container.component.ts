import { Component } from '@angular/core';
import { ArticleStore } from '../services/article.store';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss'],
})
export class ArticleContainerComponent {
  articles$ = this.articleStore.articles$;
  featuredArticle$ = this.articleStore.featuredArticle$;

  constructor(private articleStore: ArticleStore) {}
}
