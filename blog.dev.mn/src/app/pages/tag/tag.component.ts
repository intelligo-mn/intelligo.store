import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { ScullyContentService } from '@services/scully-content.service';
import { SeoService } from '@services/seo.service';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  page$: Observable<ScullyRoute> = this.scullyContent.getCurrent();

  tagPosts$: Observable<ScullyRoute[]>;

  constructor(
    private scully: ScullyRoutesService,
    private scullyContent: ScullyContentService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.page$ = this.scullyContent.getCurrent();
    this.page$
      .pipe(
        first(),
        tap((tag) => {
          this.seo.generateTags({
            title: tag.title,
            description: `All posts of ${tag.title}`,
            route: tag.route,
            keywords: [tag.title],
          });
        })
      )
      .subscribe();

    this.tagPosts$ = this.scullyContent.tagPosts(this.page$);
  }
}
