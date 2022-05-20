import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsResolver } from './tags.resolver';

@Module({
  providers: [TagsResolver, TagsService]
})
export class TagsModule {}
