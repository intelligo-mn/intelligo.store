import { InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';

export enum AddressType {
  BILLING = 'billing',
  SHIPPING = 'shipping',
}

registerEnumType(AddressType, { name: 'AddressType' });

@InputType('AddressInputType', { isAbstract: true })
@ObjectType()
export class Address extends CoreEntity {
  title: string;
  default: boolean;
  address: UserAddress;
  type: AddressType;
  customer: User;
}

@InputType('UserAddressInputType', { isAbstract: true })
@ObjectType()
export class UserAddress {
  street_address?: string;
  country?: string;
  city?: string;
  state?: string;
  zip?: string;
}
