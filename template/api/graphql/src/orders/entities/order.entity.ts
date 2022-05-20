import {
  ObjectType,
  Field,
  registerEnumType,
  InputType,
  ID,
  Int,
} from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserAddress } from 'src/addresses/entities/address.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Coupon } from 'src/coupons/entities/coupon.entity';
import { DigitalFile, Product } from 'src/products/entities/product.entity';
import { Refund } from 'src/refunds/entities/refund.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { User } from 'src/users/entities/user.entity';
import { OrderStatus } from './order-status.entity';

export enum PaymentGatewayType {
  STRIPE = 'stripe',
  CASH_ON_DELIVERY = 'CASH_ON_DELIVERY',
  CASH = 'Cash',
  FULL_WALLET_PAYMENT = 'Full wallet payment',
}

registerEnumType(PaymentGatewayType, { name: 'PaymentGatewayType' });

@InputType('OrderInputType', { isAbstract: true })
@ObjectType()
export class Order extends CoreEntity {
  tracking_number: string;
  @Field(() => ID)
  customer_id: number;
  customer_contact: string;
  customer: User;
  @Type(() => Order)
  parent_order?: Order;
  @Type(() => Order)
  children: Order[];
  status: OrderStatus;
  amount: number;
  sales_tax: number;
  total: number;
  paid_total: number;
  payment_id?: string;
  payment_gateway?: PaymentGatewayType;
  coupon?: Coupon;
  shop: Shop;
  discount?: number;
  delivery_fee: number;
  delivery_time?: string;
  @Type(() => Product)
  products: Product[];
  billing_address?: UserAddress;
  shipping_address?: UserAddress;
  refund?: Refund;
  wallet_point?: WalletPoint;
}

@InputType('WalletPointInputType', { isAbstract: true })
@ObjectType()
class WalletPoint {
  @Field(() => ID)
  id: number;
  amount: number;
}

@InputType('OrderFileInputType', { isAbstract: true })
@ObjectType()
export class OrderFiles extends CoreEntity {
  purchase_key: string;
  @Field(() => Int)
  digital_file_id: number;
  @Field(() => Int)
  customer_id: number;
  file?: DigitalFile;
}
