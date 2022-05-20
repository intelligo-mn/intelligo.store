import { ConnectProductOrderPivot, UserAddressInput } from './create-order.dto';

export class CheckoutVerificationDto {
  amount: number;
  products: ConnectProductOrderPivot[];
  billing_address?: UserAddressInput;
  shipping_address?: UserAddressInput;
}

export class VerifiedCheckoutData {
  total_tax: number;
  shipping_charge: number;
  unavailable_products: number[];
  wallet_currency: number;
  wallet_amount: number;
}
