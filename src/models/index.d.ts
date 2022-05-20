import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum WithdrawStatus {
  APPROVED = "APPROVED",
  PROCCESSING = "PROCCESSING",
  REJECTED = "REJECTED",
  PENDING = "PENDING",
  ON_HOLD = "ON_HOLD"
}

export enum EntityType {
  PRODUCT = "PRODUCT",
  EVENT = "EVENT",
  BOOK = "BOOK"
}

export enum EntityStatus {
  PUBLISH = "PUBLISH",
  DRAFT = "DRAFT"
}

export enum PaymentGateway {
  QPAY = "QPAY",
  SOCIAL_PAY = "SOCIAL_PAY",
  CASH_ON_DELIVERY = "CASH_ON_DELIVERY",
  BANK_TRANSACTION = "BANK_TRANSACTION",
  CARD = "CARD"
}

export enum ShippingType {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
  FREE = "FREE"
}

export enum CouponType {
  FIXED_COUPON = "FIXED_COUPON",
  PERCENTAGE_COUPON = "PERCENTAGE_COUPON",
  FREE_SHIPPING_COUPON = "FREE_SHIPPING_COUPON"
}

export enum AddressType {
  BILLING = "BILLING",
  SHIPPING = "SHIPPING"
}

export declare class Profile {
  readonly id?: string | null;
  readonly avatar?: Attachment | null;
  readonly bio?: string | null;
  readonly socials?: Social[] | null;
  readonly contact?: string | null;
  constructor(init: ModelInit<Profile>);
}

export declare class Attachment {
  readonly thumbnail?: string | null;
  readonly original?: string | null;
  constructor(init: ModelInit<Attachment>);
}

export declare class Social {
  readonly type?: string | null;
  readonly link?: string | null;
  constructor(init: ModelInit<Social>);
}

export declare class AttributeValue {
  readonly id?: number | null;
  readonly value?: string | null;
  readonly meta?: string | null;
  constructor(init: ModelInit<AttributeValue>);
}

export declare class TypeSettings {
  readonly isHome?: boolean | null;
  readonly layoutType?: string | null;
  readonly productCard?: string | null;
  constructor(init: ModelInit<TypeSettings>);
}

export declare class PaymentInfo {
  readonly account?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly bank?: string | null;
  constructor(init: ModelInit<PaymentInfo>);
}

export declare class UserAddress {
  readonly streetAddress?: string | null;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  constructor(init: ModelInit<UserAddress>);
}

export declare class EntityVariationOption {
  readonly name?: string | null;
  readonly value?: string | null;
  constructor(init: ModelInit<EntityVariationOption>);
}

type WithdrawMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BannerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EntityMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BalanceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrganizationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AttributeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ShippingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EntityVariationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CouponMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContactMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EntityCategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserOrganizationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Withdraw {
  readonly id: string;
  readonly amount?: string | null;
  readonly status?: WithdrawStatus | keyof typeof WithdrawStatus | null;
  readonly paymentMethod?: string | null;
  readonly details?: string | null;
  readonly note?: string | null;
  readonly organizationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Withdraw, WithdrawMetaData>);
  static copyOf(source: Withdraw, mutator: (draft: MutableModel<Withdraw, WithdrawMetaData>) => MutableModel<Withdraw, WithdrawMetaData> | void): Withdraw;
}

export declare class Banner {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: Attachment | null;
  readonly typeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Banner, BannerMetaData>);
  static copyOf(source: Banner, mutator: (draft: MutableModel<Banner, BannerMetaData>) => MutableModel<Banner, BannerMetaData> | void): Banner;
}

export declare class Type {
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly promotionalSliders?: string | null;
  readonly settings?: TypeSettings | null;
  readonly icon?: string | null;
  readonly banners?: (Banner | null)[] | null;
  readonly categories?: (Category | null)[] | null;
  readonly entities?: (Entity | null)[] | null;
  readonly tags?: (Tag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Type, TypeMetaData>);
  static copyOf(source: Type, mutator: (draft: MutableModel<Type, TypeMetaData>) => MutableModel<Type, TypeMetaData> | void): Type;
}

export declare class Category {
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly details?: string | null;
  readonly image?: Attachment | null;
  readonly icon?: string | null;
  readonly entities?: (EntityCategory | null)[] | null;
  readonly typeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Entity {
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly entityType?: EntityType | keyof typeof EntityType | null;
  readonly description?: string | null;
  readonly inStock?: boolean | null;
  readonly isTaxable?: string | null;
  readonly salePrice?: string | null;
  readonly maxPrice?: string | null;
  readonly minPrice?: string | null;
  readonly sku?: string | null;
  readonly gallery?: (Attachment | null)[] | null;
  readonly image?: Attachment | null;
  readonly status?: EntityStatus | keyof typeof EntityStatus | null;
  readonly height?: string | null;
  readonly lenght?: string | null;
  readonly width?: string | null;
  readonly price?: number | null;
  readonly quantity?: number | null;
  readonly unit?: string | null;
  readonly categories?: (EntityCategory | null)[] | null;
  readonly orderID: string;
  readonly organizationID: string;
  readonly tagID: string;
  readonly typeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Entity, EntityMetaData>);
  static copyOf(source: Entity, mutator: (draft: MutableModel<Entity, EntityMetaData>) => MutableModel<Entity, EntityMetaData> | void): Entity;
}

export declare class Tag {
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly details?: string | null;
  readonly image?: Attachment | null;
  readonly icon?: string | null;
  readonly entities?: (Entity | null)[] | null;
  readonly typeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class Balance {
  readonly id: string;
  readonly adminCommissionRate?: string | null;
  readonly totalEarnings?: string | null;
  readonly withdrawnAmount?: string | null;
  readonly currentBalance?: string | null;
  readonly paymentInfo?: PaymentInfo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Balance, BalanceMetaData>);
  static copyOf(source: Balance, mutator: (draft: MutableModel<Balance, BalanceMetaData>) => MutableModel<Balance, BalanceMetaData> | void): Balance;
}

export declare class Organization {
  readonly id: string;
  readonly isActive?: string | null;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly coverImage?: Attachment | null;
  readonly logo?: Attachment | null;
  readonly address?: UserAddress | null;
  readonly settings?: string | null;
  readonly attributes?: (Attribute | null)[] | null;
  readonly orders?: (Order | null)[] | null;
  readonly entities?: (Entity | null)[] | null;
  readonly staffs?: (User | null)[] | null;
  readonly balance?: Balance | null;
  readonly withdraws?: (Withdraw | null)[] | null;
  readonly users?: (UserOrganization | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly organizationBalanceId?: string | null;
  constructor(init: ModelInit<Organization, OrganizationMetaData>);
  static copyOf(source: Organization, mutator: (draft: MutableModel<Organization, OrganizationMetaData>) => MutableModel<Organization, OrganizationMetaData> | void): Organization;
}

export declare class Attribute {
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly organizationID: string;
  readonly values?: AttributeValue | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Attribute, AttributeMetaData>);
  static copyOf(source: Attribute, mutator: (draft: MutableModel<Attribute, AttributeMetaData>) => MutableModel<Attribute, AttributeMetaData> | void): Attribute;
}

export declare class Order {
  readonly id: string;
  readonly trakingNumber?: string | null;
  readonly amount?: string | null;
  readonly paidTotal?: string | null;
  readonly discount?: string | null;
  readonly deliveryFee?: string | null;
  readonly deliveryTime?: string | null;
  readonly billingAddress?: UserAddress | null;
  readonly shippingAddress?: UserAddress | null;
  readonly paymentGateway?: PaymentGateway | keyof typeof PaymentGateway | null;
  readonly couponID: string;
  readonly entities?: (Entity | null)[] | null;
  readonly userID: string;
  readonly organizationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class User {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly isActiive?: string | null;
  readonly orders?: (Order | null)[] | null;
  readonly organizationID: string;
  readonly organizations?: (UserOrganization | null)[] | null;
  readonly profile?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Shipping {
  readonly id: string;
  readonly name?: string | null;
  readonly amount?: string | null;
  readonly isGlobal?: string | null;
  readonly type?: ShippingType | keyof typeof ShippingType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Shipping, ShippingMetaData>);
  static copyOf(source: Shipping, mutator: (draft: MutableModel<Shipping, ShippingMetaData>) => MutableModel<Shipping, ShippingMetaData> | void): Shipping;
}

export declare class EntityVariation {
  readonly id: string;
  readonly title?: string | null;
  readonly price?: number | null;
  readonly sku?: string | null;
  readonly isDisable?: boolean | null;
  readonly salePrice?: number | null;
  readonly quantity?: number | null;
  readonly options?: EntityVariationOption | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EntityVariation, EntityVariationMetaData>);
  static copyOf(source: EntityVariation, mutator: (draft: MutableModel<EntityVariation, EntityVariationMetaData>) => MutableModel<EntityVariation, EntityVariationMetaData> | void): EntityVariation;
}

export declare class Coupon {
  readonly id: string;
  readonly code?: string | null;
  readonly description?: string | null;
  readonly type?: CouponType | keyof typeof CouponType | null;
  readonly image?: Attachment | null;
  readonly isValid?: boolean | null;
  readonly amount?: number | null;
  readonly activeFrom?: string | null;
  readonly expireAt?: string | null;
  readonly orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Coupon, CouponMetaData>);
  static copyOf(source: Coupon, mutator: (draft: MutableModel<Coupon, CouponMetaData>) => MutableModel<Coupon, CouponMetaData> | void): Coupon;
}

export declare class Contact {
  readonly id: string;
  readonly subject?: string | null;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Contact, ContactMetaData>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact, ContactMetaData>) => MutableModel<Contact, ContactMetaData> | void): Contact;
}

export declare class Address {
  readonly id: string;
  readonly title?: string | null;
  readonly default?: boolean | null;
  readonly address?: UserAddress | null;
  readonly type?: AddressType | keyof typeof AddressType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

export declare class EntityCategory {
  readonly id: string;
  readonly category: Category;
  readonly entity: Entity;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EntityCategory, EntityCategoryMetaData>);
  static copyOf(source: EntityCategory, mutator: (draft: MutableModel<EntityCategory, EntityCategoryMetaData>) => MutableModel<EntityCategory, EntityCategoryMetaData> | void): EntityCategory;
}

export declare class UserOrganization {
  readonly id: string;
  readonly organization: Organization;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserOrganization, UserOrganizationMetaData>);
  static copyOf(source: UserOrganization, mutator: (draft: MutableModel<UserOrganization, UserOrganizationMetaData>) => MutableModel<UserOrganization, UserOrganizationMetaData> | void): UserOrganization;
}