import { InputType, PickType } from '@nestjs/graphql';
import { ConnectTypeBelongsTo } from 'src/categories/dto/create-category.input';
import { Tag } from '../entities/tag.entity';

@InputType()
export class CreateTagInput extends PickType(Tag, [
  'name',
  'details',
  'image',
  'icon',
]) {
  type?: ConnectTypeBelongsTo;
}
