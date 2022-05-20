import { InputType, Int, Field, ID, Float } from '@nestjs/graphql';
import { PaymentGatewayType } from '../entities/order.entity';

@InputType()
export class CreateOrderInput {
  @Field(() => ID)
  shop_id?: number;
  @Field(() => ID)
  coupon_id?: number;
  status: string;
  customer_contact: string;
  products: ConnectProductOrderPivot[];
  amount: number;
  sales_tax: number;
  total?: number;
  paid_total?: number;
  payment_id?: string;
  payment_gateway?: PaymentGatewayType;
  discount?: number;
  delivery_fee?: number;
  delivery_time: string;
  card?: CardInput;
  billing_address?: UserAddressInput;
  shipping_address?: UserAddressInput;
  use_wallet_points?: boolean;
  @Field(() => ID)
  customer_id?: number;
}

@InputType()
export class UserAddressInput {
  street_address: string;
  country: string;
  city: string;
  state: string;
  zip: string;
}

@InputType()
export class ConnectProductOrderPivot {
  @Field(() => ID)
  product_id: number;
  @Field(() => ID)
  variation_option_id?: number;
  @Field(() => Int)
  order_quantity: number;
  unit_price: number;
  subtotal: number;
}

@InputType()
export class CardInput {
  number: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  email?: string;
}
