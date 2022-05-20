import { CreateShopInput } from './create-shop.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateShopInput extends PartialType(CreateShopInput) {
  @Field(() => ID)
  id: number;
}
