import { Injectable } from '@nestjs/common';

import { debug } from 'debug';
import Firebase from 'firebase';
import { HN_API_VERSION } from 'src/app.config';
import { sampleData } from 'src/graphql/sample-data';
import { FeedType, NewsItemModel } from 'src/models';

import { HnCache } from '../database/cache';
import { HnDatabase } from '../database/database';

const logger = debug('app:Feed');
logger.log = console.log.bind(console);
@Injectable()
export class ArticleService {

  firebaseApi = Firebase.database().ref(HN_API_VERSION);
  cache = new HnCache();
  db = new HnDatabase(this.firebaseApi, this.cache);
  
  constructor() {}

  public async getForType(
    type: FeedType,
    first: number,
    skip: number,
  ): Promise<Array<NewsItemModel | void>> {
    logger('Get first', first, type, 'stories skip', skip);

    switch (type) {
      case FeedType.TOP:
        // In this app the HN data is reconstructed in-memory
        return Promise.all(
          this.cache.top
            .slice(skip, first + skip)
            .map(
              (id) => this.cache.getNewsItem(id) || this.db.fetchNewsItem(id),
            ),
        );

      case FeedType.NEW:
        return Promise.all(
          this.cache.new
            .slice(skip, first + skip)
            .map(
              (id) => this.cache.getNewsItem(id) || this.db.fetchNewsItem(id),
            ),
        );

      case FeedType.BEST:
        return Promise.all(
          this.cache.best
            .slice(skip, first + skip)
            .map(
              (id) => this.cache.getNewsItem(id) || this.db.fetchNewsItem(id),
            ),
        );

      case FeedType.SHOW:
        return this.cache.showNewsItems.slice(skip, first + skip);

      case FeedType.ASK:
        return this.cache.askNewsItems.slice(skip, first + skip);

      case FeedType.JOB:
        return this.cache.jobNewsItems.slice(skip, first + skip);

      default:
        return sampleData.newsItems.slice(skip, skip + first);
    }
  }
}
