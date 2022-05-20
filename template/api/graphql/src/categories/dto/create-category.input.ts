import { InputType, Int, PickType, Field, ID } from '@nestjs/graphql';
import { Category } from '../entities/category.entity';

@InputType()
export class ConnectTypeBelongsTo {
  @Field(() => ID)
  connect: number;
}
@InputType()
export class CreateCategoryInput extends PickType(Category, [
  'name',
  'details',
  'icon',
  'image',
]) {
  @Field(() => Int, { nullable: true })
  parent?: number;
  type?: ConnectTypeBelongsTo;
}
