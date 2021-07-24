import { Module } from '@nestjs/common';
import Firebase from 'firebase';
import { dev, HN_DB_URI } from './app.config';
import { ArticleService } from './services/article.service';
import { AuthService } from './services/auth.service';
import { CommentService } from './services/comment.service';
import { NewsItemService } from './services/item.service';
import { LocalStrategy } from './services/local.strategy';
import { UserService } from './services/user.service';

@Module({
  providers: [
    ArticleService,
    CommentService,
    UserService,
    AuthService,
    LocalStrategy,
    NewsItemService
  ],
})
export class AppModule {

}
