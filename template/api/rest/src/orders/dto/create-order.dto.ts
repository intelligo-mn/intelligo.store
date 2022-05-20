import { PaymentGatewayType } from '../entities/order.entity';

export class CreateOrderDto {
  shop_id?: number;
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
}

export class UserAddressInput {
  street_address: string;
  country: string;
  city: string;
  state: string;
  zip: string;
}

export class ConnectProductOrderPivot {
  product_id: number;
  variation_option_id?: number;
  order_quantity: number;
  unit_price: number;
  subtotal: number;
}

export class CardInput {
  number: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  email?: string;
}
