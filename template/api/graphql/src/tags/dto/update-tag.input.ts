import { CreateTagInput } from './create-tag.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateTagInput extends PartialType(CreateTagInput) {
  @Field(() => ID)
  id: number;
}
