import { Injectable } from '@nestjs/common';
import { debug } from 'debug';
import { CommentModel } from 'src/models';

import Firebase from 'firebase';
import { HN_API_VERSION } from 'src/app.config';
import { HnCache } from 'src/database/cache';
import { HnDatabase } from 'src/database/database';
const logger = debug('app:Comment');
logger.log = console.log.bind(console);

@Injectable()
export class CommentService {
  firebaseApi = Firebase.database().ref(HN_API_VERSION);
  cache = new HnCache();
  db = new HnDatabase(this.firebaseApi, this.cache);

  constructor() {}

  async getComment(id: number): Promise<CommentModel | void> {
    return (
      this.cache.getComment(id) ||
      this.db
        .fetchComment(id)
        .catch((reason) => logger('Rejected comment:', reason))
    );
  }

  async getComments(ids: number[]): Promise<Array<CommentModel> | void> {
    return Promise.all(ids.map((commentId) => this.getComment(commentId)))
      .then((comments): CommentModel[] =>
        comments.filter(
          (comment): comment is CommentModel => comment !== undefined,
        ),
      )
      .catch((reason) => logger('Rejected comments:', reason));
  }
}
