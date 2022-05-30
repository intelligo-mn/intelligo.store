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

const { Settings, Wallet, Withdraw, Banner, Type, Category, Entity, Tag, Balance, Organization, Attribute, Order, User, Shipping, EntityVariation, Coupon, Contact, Address, EntityCategory, UserOrganization, FacebookSettings, GoogleSettings, SeoSettings, Attachment, DeliveryTime, SettingsOptions, Profile, Social, AttributeValue, TypeSettings, PaymentInfo, UserAddress, EntityVariationOption } = initSchema(schema);

export {
  Settings,
  Wallet,
  Withdraw,
  Banner,
  Type,
  Category,
  Entity,
  Tag,
  Balance,
  Organization,
  Attribute,
  Order,
  User,
  Shipping,
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
  FacebookSettings,
  GoogleSettings,
  SeoSettings,
  Attachment,
  DeliveryTime,
  SettingsOptions,
  Profile,
  Social,
  AttributeValue,
  TypeSettings,
  PaymentInfo,
  UserAddress,
  EntityVariationOption
};