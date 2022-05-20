import { PickType } from '@nestjs/swagger';
import { Tag } from '../entities/tag.entity';

export class CreateTagDto extends PickType(Tag, [
  'name',
  'type',
  'details',
  'image',
  'icon',
]) {}
