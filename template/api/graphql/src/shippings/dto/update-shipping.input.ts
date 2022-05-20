import { CreateShippingInput } from './create-shipping.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateShippingInput extends PartialType(CreateShippingInput) {
  @Field(() => ID)
  id: number;
}
