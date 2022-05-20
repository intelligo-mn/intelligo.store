import {
  ObjectType,
  Field,
  Int,
  ID,
  InputType,
  PickType,
} from '@nestjs/graphql';
import { UserAddress } from 'src/addresses/entities/address.entity';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Location, ShopSocials } from 'src/settings/entities/setting.entity';
import { User } from 'src/users/entities/user.entity';

@InputType('ShopInputType', { isAbstract: true })
@ObjectType()
export class Shop extends CoreEntity {
  @Field(() => Int)
  owner_id: number;
  owner: User;
  staffs?: User[];
  is_active: boolean;
  @Field(() => Int)
  orders_count: number;
  @Field(() => Int)
  products_count: number;
  balance?: Balance;
  name: string;
  slug: string;
  description?: string;
  cover_image?: Attachment;
  logo?: Attachment;
  address: UserAddress;
  settings?: ShopSettings;
}

@InputType('BalanceInputType', { isAbstract: true })
@ObjectType()
export class Balance {
  @Field(() => ID, { nullable: true })
  id?: number;
  admin_commission_rate: number;
  shop: Shop;
  total_earnings: number;
  withdrawn_amount: number;
  current_balance: number;
  payment_info: PaymentInfo;
}
@InputType()
export class BalanceInput extends PickType(Balance, ['id', 'payment_info']) {}

@InputType('PaymentInfoInputType', { isAbstract: true })
@ObjectType()
export class PaymentInfo {
  account?: string;
  name?: string;
  email?: string;
  bank?: string;
}

@InputType('ShopSettingsInputType', { isAbstract: true })
@ObjectType()
export class ShopSettings {
  socials?: ShopSocials[];
  contact?: string;
  location?: Location;
  website?: string;
}
