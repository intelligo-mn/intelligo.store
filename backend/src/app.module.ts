import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { ormconfig } from './orm.config';
import { ForumModule } from './modules/forum/forum.module';
import { CategoryModule } from './modules/category/category.module';
import { DiscussionModule } from './modules/discussion/discussion.module';
import { CommentModule } from './modules/comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    ForumModule,
    CategoryModule,
    DiscussionModule,
    CommentModule
  ],
  controllers: [
  ],
  providers: [
  ]
})
export class AppModule {}
