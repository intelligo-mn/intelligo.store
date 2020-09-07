import { Router, NavigationEnd, RouteConfigLoadEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import {
  map,
  switchMap,
  tap,
  reduce,
  filter,
  startWith,
  share,
} from 'rxjs/operators';
import { Observable, zip, concat } from 'rxjs';
import { TagWeight } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class ScullyContentService {
  constructor(private scully: ScullyRoutesService, private router: Router) {}

  blogPosts(): Observable<ScullyRoute[]> {
    return filterRoute(this.scully.available$, '/blog/').pipe(
      map((posts) =>
        posts.sort((p1, p2) =>
          new Date(p1.publishedAt) > new Date(p2.publishedAt) ? -1 : 1
        )
      )
    );
  }

  getCurrent(): Observable<ScullyRoute> {
    return this.router.events.pipe(
      startWith(new NavigationEnd(0, '/', '/')),
      filter((event) => event instanceof NavigationEnd),
      switchMap(() => this.scully.getCurrent()),
      filter((route) => !!route)
    );
  }

  latestBlogPost(): Observable<ScullyRoute> {
    return this.blogPosts().pipe(map((posts) => posts[0]));
  }

  lastUpdateBlogPosts() {
    return this.blogPosts().pipe(
      map((posts) =>
        posts.sort((p1, p2) =>
          new Date(p1.updatedAt) > new Date(p2.updatedAt) ? -1 : 1
        )
      )
    );
  }

  authors(): Observable<ScullyRoute[]> {
    return filterRoute(this.scully.available$, '/authors/');
  }

  authorPosts(author: Observable<ScullyRoute>): Observable<ScullyRoute[]> {
    const blogPosts = this.posts();
    return author.pipe(
      switchMap((a) =>
        blogPosts.pipe(
          map((blogs) =>
            blogs.filter((blog) => blog.authors.some((t) => t === a.title))
          )
        )
      )
    );
  }

  lastUpdateAuthorPosts(author: Observable<ScullyRoute>) {
    return this.authorPosts(author).pipe(
      map((posts) =>
        posts.sort((p1, p2) =>
          new Date(p1.updatedAt) > new Date(p2.updatedAt) ? -1 : 1
        )
      )
    );
  }

  tags(): Observable<ScullyRoute[]> {
    return filterRoute(this.scully.available$, '/tags/');
  }

  authorTags(author: Observable<ScullyRoute>): Observable<ScullyRoute[]> {
    const authorPosts$ = this.authorPosts(author);
    const tags$ = this.tags();
    return authorPosts$.pipe(
      switchMap((authorPosts) =>
        tags$.pipe(
          map((tags) => {
            return tags.filter(
              (tag) =>
                authorPosts.filter((post) => post.tags.includes(tag.title))
                  .length > 0
            );
          })
        )
      )
    );
  }

  tagPosts(tag: Observable<ScullyRoute>): Observable<ScullyRoute[]> {
    const blogPosts = this.posts();
    return tag.pipe(
      switchMap((page) =>
        blogPosts.pipe(
          map((blogs) =>
            blogs.filter((blog) => blog.tags.some((t) => t === page.title))
          )
        )
      )
    );
  }

  weightedTags(
    blogPosts$: Observable<ScullyRoute[]>,
    tags$: Observable<ScullyRoute[]>
  ): Observable<TagWeight[]> {
    const used$: Observable<number> = blogPosts$.pipe(
      map((blogs) =>
        blogs.map((blog) => (blog.tags || []).length).reduce((a, b) => a + b, 0)
      )
    );

    return blogPosts$.pipe(
      switchMap((blogs) =>
        tags$.pipe(
          map((tags) =>
            tags.map((tag) => ({
              tag,
              count: blogs.filter((blog) =>
                (blog.tags || []).some((t) => t === tag.title)
              ).length,
            }))
          ),
          switchMap((counts) =>
            used$.pipe(
              map((used) =>
                counts.map((count) => ({
                  tag: count.tag,
                  weight: (count.count / used) * 100,
                }))
              )
            )
          )
        )
      )
    );
  }

  links(): Observable<ScullyRoute[]> {
    return filterRoute(this.scully.available$, '/links/').pipe(
      map((posts) =>
        posts.sort((p1, p2) =>
          new Date(p1.publishedAt) > new Date(p2.publishedAt) ? -1 : 1
        )
      )
    );
  }

  latestLink(): Observable<ScullyRoute> {
    return this.links().pipe(map((posts) => posts[0]));
  }

  lastUpdateLinks() {
    return this.links().pipe(
      map((posts) =>
        posts.sort((p1, p2) =>
          new Date(p1.updatedAt) > new Date(p2.updatedAt) ? -1 : 1
        )
      )
    );
  }

  posts() {
    return zip(this.blogPosts(), this.links()).pipe(
      map(([p1, p2]) => [...p1, ...p2]),
      map((posts) =>
        posts.sort((p1, p2) =>
          new Date(p1.publishedAt) > new Date(p2.publishedAt) ? -1 : 1
        )
      )
    );
  }

  latestPost(): Observable<ScullyRoute> {
    return this.posts().pipe(map((posts) => posts[0]));
  }

  lastPosts() {
    return this.posts().pipe(
      map((posts) =>
        posts.sort((p1, p2) =>
          new Date(p1.updatedAt) > new Date(p2.updatedAt) ? -1 : 1
        )
      )
    );
  }
}

export const filterRoute = (
  routes: Observable<ScullyRoute[]>,
  path: string
): Observable<ScullyRoute[]> => {
  return routes.pipe(
    map((r) => r.filter((route) => route.route.startsWith(path)))
  );
};
