import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { SeoService } from '@services/seo.service';
import { first, tap } from 'rxjs/operators';
import { ScullyContentService } from '@services/scully-content.service';

@Component({
  selector: 'page-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  author$: Observable<ScullyRoute>;

  latestAuthorPosts$: Observable<ScullyRoute[]>;
  updatedAuthorPosts$: Observable<ScullyRoute[]>;
  authorTags$: Observable<ScullyRoute[]>;

  constructor(
    private scully: ScullyRoutesService,
    private scullyContent: ScullyContentService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.author$ = this.scullyContent.getCurrent();
    this.author$
      .pipe(
        first(),
        tap(author =>
          this.seo.generateTags({
            title: author.title,
            description: `Overview of posts on blog.dev.mn by ${author.title}`,
            route: author.route,
            image: author.img,
            author: {
              first_name: author.title.slice(0, author.title.indexOf(' ') - 1),
              last_name: author.title.slice(
                author.title.indexOf(' ') - 1,
                author.title.length - 1
              ),
              username: author.twitter
            }
          })
        )
      )
      .subscribe();

    this.latestAuthorPosts$ = this.scullyContent.authorPosts(this.author$);
    this.updatedAuthorPosts$ = this.scullyContent.lastUpdateAuthorPosts(
      this.author$
    );

    this.authorTags$ = this.scullyContent.authorTags(this.author$);
  }
}
