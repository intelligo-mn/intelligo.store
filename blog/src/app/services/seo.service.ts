import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  generateTags(config: SeoConfig = {}) {
    config.keywords
      ? (config.keywords = [...environment.keywords, ...config.keywords])
      : (config.keywords = environment.keywords);

    // default values
    config = {
      title: environment.title,
      description: environment.description,
      robots: 'index, follow',
      image: this.absoluteImageUrl(environment.featureImage),
      route: '',
      ...config
    };

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'robots', content: config.robots });
    this.meta.updateTag({
      name: 'keywords',
      content: config.keywords.join(', ')
    });

    this.openGraph(config);
    this.twitterCard(config);
  }

  private openGraph(config: SeoConfig) {
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description
    });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({
      property: 'og:url',
      content: `${environment.url}${config.route}`
    });
    this.meta.updateTag({
      property: 'og:image',
      content: config.og_image || config.image
    });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: config.description
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'notiz'
    });
    this.meta.updateTag({
      property: 'og:locale',
      content: 'en_US'
    });

    if (config.article) {
      this.meta.updateTag({
        property: 'og:type',
        content: 'article'
      });

      this.meta.updateTag({
        property: `og:article:published_time`,
        content: config.article.published_time
      });
      this.meta.updateTag({
        property: `og:article:modified_time`,
        content: config.article.modified_time
      });
      this.meta.updateTag({
        property: `og:article:tag`,
        content: config.article.tag.join(', ')
      });
      this.meta.updateTag({
        property: `og:article:author`,
        content: config.article.author.join(', ')
      });

      return;
    }

    if (config.author) {
      this.meta.updateTag({
        property: 'og:type',
        content: 'profile'
      });

      this.meta.updateTag({
        property: `og:profile:first_name`,
        content: config.author.first_name
      });
      this.meta.updateTag({
        property: `og:profile:lastname`,
        content: config.author.last_name
      });
      this.meta.updateTag({
        property: `og:profile:username`,
        content: config.author.username
      });

      return;
    }

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });
  }

  private twitterCard(config: SeoConfig) {
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });
    this.meta.updateTag({ name: 'twitter:site', content: '@notiz_dev' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: config.twitter_image || config.image
    });
  }

  private absoluteImageUrl(image: string) {
    return `${environment.url}/${image}`;
  }
}

export interface SeoConfig {
  title?: string;
  description?: string;
  robots?: string;
  image?: string;
  og_image?: string;
  twitter_image?: string;
  route?: string;
  keywords?: string[];
  article?: SeoArticle;
  author?: SeoProfile;
}

export interface SeoArticle {
  published_time: string;
  modified_time: string;
  tag: string[];
  author: string[];
}

export interface SeoProfile {
  first_name: string;
  last_name: string;
  username: string;
}
