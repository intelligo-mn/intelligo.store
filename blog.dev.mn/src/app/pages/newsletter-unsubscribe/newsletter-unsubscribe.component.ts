import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-newsletter-unsubscribe',
  templateUrl: './newsletter-unsubscribe.component.html',
  styleUrls: ['./newsletter-unsubscribe.component.scss'],
})
export class NewsletterUnsubscribeComponent implements OnInit {
  unsubscribed: boolean;
  error: boolean;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Unsubscribe newsletter',
      description: 'Unsubscribe from blog.dev.mn newsletter',
    });

    const uuid = this.route.snapshot.queryParamMap.get('uuid');
    this.unsubscribe(uuid);
  }

  unsubscribe(uuid: string) {
    this.http
      .post('https://notiz-dev-api.herokuapp.com/unsubscribe', { uuid })
      .pipe(first())
      .subscribe(
        () => {},
        (error) => {
          this.error = true;
        },
        () => {
          this.unsubscribed = true;
        }
      );
  }
}
