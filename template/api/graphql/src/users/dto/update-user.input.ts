import { RegisterInput } from './create-user.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { UserAddressInput } from '../../orders/dto/create-order.input';
import { AddressType } from '../../addresses/entities/address.entity';

@InputType()
export class UpdateUserInput extends PartialType(RegisterInput) {
  @Field(() => ID)
  id: number;
  name?: string;
  address?: AddressHasMany;
}

@InputType()
class AddressHasMany {
  @Field(() => [UserAddressUpsertInput], { nullable: 'itemsAndList' })
  upsert?: UserAddressUpsertInput[];
}

@InputType()
class UserAddressUpsertInput {
  @Field(() => ID, { nullable: true })
  id?: number;
  title: string;
  default?: boolean;
  address: UserAddressInput;
  type: AddressType;
}
