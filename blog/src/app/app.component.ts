import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ThemeService } from '@services/theme.service';
import { tap } from 'rxjs/operators';
import { shortcut } from '@utils/shortcuts';
import { KeyCode } from '@utils/keycodes';
import { merge, Observable } from 'rxjs';
import { ScullyContentService } from '@services/scully-content.service';
import { ScullyRoute } from '@scullyio/ng-lib';
import { NewsletterSignupComponent } from '@components/newsletter-signup/newsletter-signup.component';
import { GoogleAnalyticsService } from '@services/google-analytics.service';
import { NizSearch } from '@components/search/search.component';
import { FooterSection } from '@components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('newsletter', { read: NewsletterSignupComponent })
  newsletter: NewsletterSignupComponent;

  copyrightUrl = 'legal/privacy-policy';
  current$: Observable<ScullyRoute>;
  createdWithSvgSources = [
    'assets/stack/angular.svg',
    'assets/stack/scully.svg',
    'assets/stack/tailwind-css.svg',
    'assets/stack/firebase.svg',
  ];

  footerSections: FooterSection[] = [
    {
      title: 'blog.dev.mn',
      links: [
        {
          title: '@dev_mn',
          url: 'https://twitter.com/dev_mn',
          svg: 'assets/img/twitter-white.svg',
          external: true,
        },
        {
          title: ' @dev-mn',
          url: 'https://github.com/dev-mn',
          svg: 'assets/img/github-white.svg',
          external: true,
        },
        {
          title: 'hello@dev.mn',
          url: 'mailto:hello@dev.mn',
          svg: 'assets/img/mail.svg',
          external: true,
        },
      ],
    },
    {
      title: 'more',
      links: [
        {
          title: 'all posts',
          url: '/blog/',
          svg: 'assets/img/blog-white.svg',
        },
        {
          title: 'authors',
          url: '/authors/',
          svg: 'assets/img/author.svg',
        },
        {
          title: 'tags',
          url: '/tags/',
          svg: 'assets/img/tags-white.svg',
        },
      ],
    },
  ];

  constructor(
    public themeService: ThemeService,
    private content: ScullyContentService,
    public analytics: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    const notiz =
      "##::: ##::'#######::'########:'####:'########:\n" +
      "###:: ##:'##.... ##:... ##..::. ##::..... ##::\n" +
      '####: ##: ##:::: ##:::: ##::::: ##:::::: ##:::\n' +
      '## ## ##: ##:::: ##:::: ##::::: ##::::: ##::::\n' +
      '##. ####: ##:::: ##:::: ##::::: ##:::: ##:::::\n' +
      '##:. ###: ##:::: ##:::: ##::::: ##::: ##::::::\n' +
      "##::. ##:. #######::::: ##::::'####: ########:\n";

    console.log(
      `${notiz} \n\n* notiz [noˈtiːt͡s] - (german) short, brief, written record \n\nInterested in our source code? It is available on GitHub https://github.com/notiz-dev/notiz ⭐. Created with Angular and Scully, hosted on Firebase.`
    );

    this.themeService.initTheme();

    merge(
      shortcut([KeyCode.ControlLeft, KeyCode.KeyT]),
      shortcut([KeyCode.ControlRight, KeyCode.KeyT])
    )
      .pipe(
        tap(() =>
          this.analytics.trigger(
            'theme toggle',
            'shortcut',
            `from ${this.themeService.theme} to ${
              this.themeService.theme === 'dark' ? 'light' : 'dark'
            }`
          )
        ),
        tap(() => this.themeService.toggleTheme())
      )
      .subscribe();

    this.current$ = this.content.getCurrent();
  }

  scrollToNewsletter() {
    this.newsletter.focus();
    this.analytics.trigger(
      'newsletter click',
      'engagement',
    )
  }

  openSearch(search: NizSearch) {
    search.openSearch();
    this.analytics.trigger("search click", "engagement", );
  }

  toggleTheme() {
    this.analytics.trigger(
      "theme toggle",
      "engagement",
      `from ${this.themeService.theme} to ${
        this.themeService.theme === "dark" ? "light" : "dark"
      }`
    );
    this.themeService.toggleTheme();
  }
}
