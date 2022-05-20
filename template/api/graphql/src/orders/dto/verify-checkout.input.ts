import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import {
  ConnectProductOrderPivot,
  UserAddressInput,
} from './create-order.input';

@InputType()
export class CheckoutVerificationInput {
  amount: number;
  products: ConnectProductOrderPivot[];
  billing_address?: UserAddressInput;
  shipping_address?: UserAddressInput;
}

@ObjectType()
export class VerifiedCheckoutData {
  total_tax: number;
  shipping_charge: number;
  @Field(() => [ID])
  unavailable_products: number[];
  @Field(() => Int)
  wallet_amount: number;
  wallet_currency: number;
}
