import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScullyRoute } from '@scullyio/ng-lib';
import { ContentType } from 'src/app/types/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  type: ContentType;
  @Input() route: ScullyRoute;
  sneakpeak$: Observable<string>;

  ngOnInit(): void {
    const type = this.route.route.split('/')[1];
    switch (type) {
      case 'blog':
        this.type = ContentType.ARTICLE;
        break;
      case 'links':
        this.type = ContentType.LINK;
        break;
    }
  }
}
