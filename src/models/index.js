// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const WithdrawStatus = {
  "APPROVED": "APPROVED",
  "PROCCESSING": "PROCCESSING",
  "REJECTED": "REJECTED",
  "PENDING": "PENDING",
  "ON_HOLD": "ON_HOLD"
};

const EntityType = {
  "PRODUCT": "PRODUCT",
  "EVENT": "EVENT",
  "BOOK": "BOOK"
};

const EntityStatus = {
  "PUBLISH": "PUBLISH",
  "DRAFT": "DRAFT"
};

const PaymentGateway = {
  "QPAY": "QPAY",
  "SOCIAL_PAY": "SOCIAL_PAY",
  "CASH_ON_DELIVERY": "CASH_ON_DELIVERY",
  "BANK_TRANSACTION": "BANK_TRANSACTION",
  "CARD": "CARD"
};

const ShippingType = {
  "FIXED": "FIXED",
  "PERCENTAGE": "PERCENTAGE",
  "FREE": "FREE"
};

const CouponType = {
  "FIXED_COUPON": "FIXED_COUPON",
  "PERCENTAGE_COUPON": "PERCENTAGE_COUPON",
  "FREE_SHIPPING_COUPON": "FREE_SHIPPING_COUPON"
};

const AddressType = {
  "BILLING": "BILLING",
  "SHIPPING": "SHIPPING"
};

const { Withdraw, Banner, Type, Category, Entity, Tag, Balance, Organization, Attribute, AttributeValue, Order, User, Shipping, Profile, EntityVariation, Coupon, Contact, Address, EntityCategory, UserOrganization, Attachment, TypeSettings, PaymentInfo, UserAddress, Social, EntityVariationOption } = initSchema(schema);

export {
  Withdraw,
  Banner,
  Type,
  Category,
  Entity,
  Tag,
  Balance,
  Organization,
  Attribute,
  AttributeValue,
  Order,
  User,
  Shipping,
  Profile,
  EntityVariation,
  Coupon,
  Contact,
  Address,
  EntityCategory,
  UserOrganization,
  WithdrawStatus,
  EntityType,
  EntityStatus,
  PaymentGateway,
  ShippingType,
  CouponType,
  AddressType,
  Attachment,
  TypeSettings,
  PaymentInfo,
  UserAddress,
  Social,
  EntityVariationOption
};