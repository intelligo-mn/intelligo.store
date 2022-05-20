import { CreateAddressInput } from './create-address.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
  @Field(() => ID)
  id: number;
}
