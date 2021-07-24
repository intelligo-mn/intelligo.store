import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Article } from '../../../../models/articles';
import { ArticleApiService } from './article-api.service';

interface ArticlesState {
  articles: Article[];
  featured?: Article;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleStore extends ComponentStore<ArticlesState> {
  readonly articles$ = this.select((state) => state.articles);
  readonly featuredArticle$ = this.select((state) => state.featured);
  readonly setArticles = this.updater(
    (state: ArticlesState, articles: Article[]) => ({
      ...state,
      articles: articles.splice(1),
      featured: articles[0],
    })
  );
  readonly getArticles = this.effect(() =>
    this.articleApiS.getArticles().pipe(
      tapResponse(
        (articles) => this.setArticles(articles),
        (error) => this.logError(error)
      )
    )
  );
  constructor(private articleApiS: ArticleApiService) {
    super({ articles: [] });
  }

  logError(error: unknown) {
    console.error(error);
  }
}
