import { CreateAttributeInput } from './create-attribute.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAttributeInput extends PartialType(CreateAttributeInput) {
  @Field(() => ID)
  id: number;
}
