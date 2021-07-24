import { Injectable } from '@nestjs/common';

import { debug } from 'debug';
import { NewsItemModel } from 'src/models';

import { HnCache } from '../database/cache';
import { HnDatabase } from '../database/database';
import Firebase from 'firebase';
import { HN_API_VERSION } from 'src/app.config';
const logger = debug('app:NewsItem');
logger.log = console.log.bind(console);

let newPostIdCounter = 100;

@Injectable()
export class NewsItemService {
  firebaseApi = Firebase.database().ref(HN_API_VERSION);
  cache = new HnCache();
  db = new HnDatabase(this.firebaseApi, this.cache);

  constructor() {}

  async getNewsItem(id: number): Promise<NewsItemModel | void> {
    return (
      this.cache.getNewsItem(id) ||
      this.db.getNewsItem(id) ||
      this.db.fetchNewsItem(id)
    );
  }

  async getNewsItems(
    ids: number[],
  ): Promise<Array<NewsItemModel | void> | void> {
    return Promise.all(ids.map((id) => this.getNewsItem(id)))
      .then((newsItems) =>
        newsItems.filter((newsItem) => newsItem !== undefined),
      )
      .catch((reason) => logger('Rejected News Items:', reason));
  }

  async upvoteNewsItem(
    id: number,
    userId: string,
  ): Promise<NewsItemModel | undefined> {
    return this.db.upvoteNewsItem(id, userId);
  }

  async hideNewsItem(id: number, userId: string): Promise<NewsItemModel> {
    return this.db.hideNewsItem(id, userId);
  }

  async submitNewsItem({
    submitterId,
    title,
    text,
    url,
  }): Promise<NewsItemModel> {
    const newsItem = new NewsItemModel({
      id: (newPostIdCounter += 1),
      submitterId,
      text,
      title,
      upvoteCount: 1,
      upvotes: [submitterId],
      url,
    });

    return this.db.submitNewsItem(newsItem.id, newsItem);
  }
}
