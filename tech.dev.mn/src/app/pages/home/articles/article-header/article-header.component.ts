import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
})
export class ArticleHeaderComponent implements OnInit {
  selectedTab = 'feed';
  tabs = ['feed', 'week', 'month', 'year', 'infinity', 'latest'];
  constructor() {}

  ngOnInit(): void {}
}
