import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
