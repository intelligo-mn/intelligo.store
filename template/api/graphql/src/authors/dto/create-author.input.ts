import { Field, ID, InputType, OmitType } from '@nestjs/graphql';
import { Author } from '../entities/author.entity';

@InputType()
export class CreateAuthorInput extends OmitType(Author, [
  'id',
  'created_at',
  'updated_at',
]) {
  @Field(() => ID)
  shop_id?: number;
}
