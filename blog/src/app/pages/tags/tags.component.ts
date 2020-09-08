import { Component, OnInit } from '@angular/core';
import { ScullyContentService } from '@services/scully-content.service';
import { Observable } from 'rxjs';
import { ScullyRoute } from '@scullyio/ng-lib';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  blogPosts$: Observable<ScullyRoute[]>;
  tags$: Observable<ScullyRoute[]>;

  constructor(
    private scullyContent: ScullyContentService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Tags',
      description: 'All tags on blog.dev.mn'
    });

    this.blogPosts$ = this.scullyContent.posts();
    this.tags$ = this.scullyContent.tags();
  }
}
