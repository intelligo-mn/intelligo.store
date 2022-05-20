import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authenticationRequired?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export type LayoutProps = {
  readonly children: ReactNode;
};

export interface HomePageProps {
  variables: {
    products: any;
    popularProducts?: any;
    categories: any;
    types: any;
  };
  layout: string;
}

export interface SearchParamOptions {
  type: string;
  name: string;
  categories: string;
  tags: string;
  author: string;
  price: string;
  manufacturer: string;
  status: string;
  is_active: string;
  shop_id: string;
  min_price: string;
  max_price: string;
}

export interface QueryOptions {
  page: number;
  limit: number;
}

export interface PaginatorInfo<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: any[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface Attachment {
  id: number;
  original: string;
  thumbnail: string;
}

export interface ProductQueryOptions extends QueryOptions {
  shop_id: string;
  sortedBy: string;
  orderBy: string;
  name: string;
  categories: string;
  category: string;
  tags: string;
  type: string;
  manufacturer: string;
  author: string;
  price: string;
  min_price: string;
  max_price: string;
  text: string;
  searchType: string;
  searchQuery: string;
}

export interface PopularProductQueryOptions extends QueryOptions {
  type_slug: string;
  with: string;
  range: number;
}

export interface CategoryQueryOptions extends QueryOptions {
  parent: string | null;
  type: string;
}

export interface TagQueryOptions extends QueryOptions {
  parent: string | null;
  type: string;
}

export interface TypeQueryOptions extends QueryOptions {
  name: string;
  orderBy: string;
}

export interface ShopQueryOptions extends QueryOptions {
  name: string;
  is_active: number;
}

export interface AuthorQueryOptions extends QueryOptions {
  name: string;
  orderBy: string;
}

export interface ManufacturerQueryOptions extends QueryOptions {
  name: string;
  orderBy: string;
}

export interface CouponQueryOptions extends QueryOptions {
  name: string;
  orderBy: string;
}

export interface OrderQueryOptions extends QueryOptions {
  name: string;
  orderBy: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  sale_price: number;
  image: Attachment;
  gallery: Attachment[];
  shop: Shop;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: Attachment;
}

interface Banner {
  id: string;
  title: string;
  description: string;
  image: Attachment;
}

export interface Type {
  id: string;
  name: string;
  slug: string;
  banners: Banner[];
  promotional_sliders: Attachment[];
  settings: {
    isHome: boolean;
    layoutType: string;
  };
}

export interface Shop {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: Attachment;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  slug: string;
}

export interface Coupon {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Settings {
  id: string;
  name: string;
  slug: string;
  options: {
    [key: string]: string;
  };
}

export interface Order {
  id: number | string;
  tracking_number: string;
  customer_id: number | string;
  // customer?: Maybe<User>;
  // status: OrderStatus;
  amount: number;
  children: Order[];
  sales_tax: number;
  total: number;
  paid_total: number;
  payment_id?: string;
  payment_gateway?: string;
  coupon?: Coupon;
  discount?: number;
  delivery_fee?: number;
  delivery_time: string;
  products: Product[];
  created_at: Date;
  updated_at: Date;
  billing_address?: Address;
  shipping_address?: Address;
}

export interface VerifyCouponInputType {
  code: string;
}

export interface VerifyCouponResponse {
  is_valid: boolean;
  coupon?: Coupon;
}

export interface CreateRefundInput {
  order_id: string;
  title: string;
  description: string;
  images: Attachment[];
}

export interface Refund {
  id: string;
  title: string;
  description: string;
  images: Attachment[];
  amount: number;
  // status: RefundStatus
  shop: Shop;
  order: Order;
  customer: User;
  created_at: string;
  updated_at: string;
}

export interface Address {
  id: string;
  title: string;
  type: any;
  address: {
    __typename?: string;
    country: string;
    city: string;
    state: string;
    zip: string;
    street_address: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  profile: {
    id?: string;
    contact?: string;
    bio?: string;
    avatar?: Attachment;
  };
  address: Address[];
}

export interface UpdateUserInput extends Partial<User> {
  id: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export type SocialLoginInputType = {
  provider: string;
  access_token: string;
};
export type SendOtpCodeInputType = {
  phone_number: string;
};

export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

export interface ForgotPasswordUserInput {
  email: string;
}

export interface ResetPasswordUserInput {
  email: string;
  token: string;
  password: string;
}

export interface VerifyForgotPasswordUserInput {
  token: string;
  email: string;
}

export interface ChangePasswordUserInput {
  oldPassword: string;
  newPassword: string;
}

export interface PasswordChangeResponse {
  success: boolean;
  message: string;
}

export interface AuthResponse {
  token: string;
  permissions: string[];
}

export interface OTPResponse {
  message: string;
  success: boolean;
  provider: string;
  id: string;
  phone_number: string;
  is_contact_exist: boolean;
}

export interface VerifyOtpInputType {
  phone_number: string;
  code: string;
  otp_id: string;
}

export interface OtpLoginInputType {
  phone_number: string;
  code: string;
  otp_id: string;
  name?: string;
  email?: string;
}

export interface OTPVerifyResponse {
  success: string;
  message: string;
}

export interface DigitalFile {
  id: string;
  fileable: Product;
}

export interface DownloadableFile {
  id: string;
  purchase_key: string;
  digital_file_id: string;
  customer_id: string;
  file: DigitalFile;
  created_at: string;
  updated_at: string;
}

export interface CreateContactUsInput {
  name: string;
  email: string;
  subject: string;
  description: string;
}

export interface CardInput {
  number: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  email?: string;
}

enum PaymentGatewayType {
  STRIPE = 'Stripe',
  CASH_ON_DELIVERY = 'Cash on delivery',
  CASH = 'Cash',
  FULL_WALLET_PAYMENT = 'Full wallet payment',
}

export interface CreateOrderInput {
  customer_contact: string;
  status: string;
  products: ConnectProductOrderPivot[];
  amount: number;
  sales_tax: number;
  total: number;
  paid_total: number;
  payment_id?: string;
  payment_gateway: PaymentGatewayType;
  coupon_id?: string;
  shop_id?: string;
  customer_id?: string;
  discount?: number;
  use_wallet_points?: boolean;
  delivery_fee?: number;
  delivery_time?: string;
  card: CardInput;
  token?: string;
  billing_address: Address;
  shipping_address: Address;
}

export interface OrderStatus {
  id: string;
  name: string;
  color: string;
  serial: number;
  created_at: string;
  updated_at: string;
}

export interface ConnectProductOrderPivot {
  product_id: number;
  variation_option_id: number;
  order_quantity: number;
  unit_price: number;
  subtotal: number;
}

export interface CheckoutVerificationInput {
  amount: number;
  products: ConnectProductOrderPivot[];
  billing_address?: Address;
  shipping_address?: Address;
}

export interface VerifiedCheckoutData {
  total_tax: number;
  shipping_charge: number;
  unavailable_products?: number[];
  wallet_currency?: number;
  wallet_amount?: number;
}

export interface ProductPaginator extends PaginatorInfo<Product> {}

export interface CategoryPaginator extends PaginatorInfo<Category> {}

export interface ShopPaginator extends PaginatorInfo<Shop> {}

export interface AuthorPaginator extends PaginatorInfo<Author> {}

export interface ManufacturerPaginator extends PaginatorInfo<Manufacturer> {}

export interface CouponPaginator extends PaginatorInfo<Coupon> {}

export interface TagPaginator extends PaginatorInfo<Tag> {}

export interface OrderPaginator extends PaginatorInfo<Order> {}

export interface OrderStatusPaginator extends PaginatorInfo<OrderStatus> {}

export interface RefundPaginator extends PaginatorInfo<Refund> {}

export interface DownloadableFilePaginator
  extends PaginatorInfo<DownloadableFile> {}
