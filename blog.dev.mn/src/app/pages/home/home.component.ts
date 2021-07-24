import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRoute } from '@scullyio/ng-lib';
import { SeoService } from '@services/seo.service';
import { ScullyContentService } from '@services/scully-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestBlogPost$: Observable<ScullyRoute>;
  blogPosts$: Observable<ScullyRoute[]>;
  updateBlogPosts$: Observable<ScullyRoute[]>;
  tags$: Observable<ScullyRoute[]>;

  constructor(
    private scullyContentService: ScullyContentService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.generateTags();
    this.latestBlogPost$ = this.scullyContentService.latestPost();
    this.blogPosts$ = this.scullyContentService.posts();
    this.updateBlogPosts$ = this.scullyContentService.lastPosts();
    this.tags$ = this.scullyContentService.tags();
  }
}
