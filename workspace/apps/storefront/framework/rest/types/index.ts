import { QueryKey } from "react-query";

export type CategoriesQueryOptionsType = {
  type?: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
  parent?: string | null;
};

export type TypeQueryOptionsType = {
  limit?: number;
};

export type BrandsQueryParamsType = {
  limit?: number;
};

export type ProductsQueryOptionsType = {
  type?: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
  shop_id?: number;
  sortedBy?: string;
  orderBy?: string;
  variations?: string;
  tags?: string;
  min_price?: string;
  max_price?: string;
};

export type TagsQueryOptionsType = {
  limit?: number;
};

export type ShopsQueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
  is_active?: number;
};
export type OrdersQueryOptionsType = {
  tracking_number?: string;
  orderBy?: string;
  sortedBy?: string;
  customer_id?: number;
  shop_id?: number;
  first?: number;
  page?: number;
  limit?: number;
};

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};
export type Banner = {
  title: string;
  description: string;
  image: {
    id: string;
    original: string;
    thumbnail: string;
  };
};

export declare type KeyBasedImage = {
  key: string;
  image: Attachment[];
};

export declare type Type = {
  id: number | string;
  name: string;
  slug: string;
  icon: string;
  banners: Banner[];
  promotional_sliders: any[];
  images: KeyBasedImage[];
  settings: {
    isHome: boolean;
    layoutType: string;
    productCard: string;
  };
  // products?: Maybe<ProductPaginator>;
  created_at: Date;
  updated_at: Date;
};
export declare type Coupon = {
  id: number | string;
  code: string;
  description: string;
  // orders: Order[];
  type: string;
  image: string;
  amount: number;
  active_from: Date;
  expire_at: Date;
  created_at: Date;
  updated_at: Date;
};
export declare type Category = {
  id: number | string;
  name: string;
  slug: string;
  parent?: number;
  parent_id?: number;
  products_count?: number;
  children: Category[];
  details?: string;
  image?: Attachment[];
  icon?: string;
  type: Type;
  products: Product[];
  created_at: Date;
  updated_at: Date;
  banner_image?: Attachment;
};
export declare type Attachment = {
  id?: number | string;
  thumbnail?: string;
  original?: string;
};

export declare type AttributeValue = {
  id: string;
  attribute_id: string;
  value: string;
  meta?: string;
};

export declare type Attribute = {
  id: string;
  slug: string;
  name: string;
  values: [AttributeValue];
};

export declare type Variation = {
  id: string;
  options?: any;
};
export declare type Product = {
  id?: number | string;
  name?: string;
  slug?: string;
  type?: Type;
  categories?: Category[];
  variations: AttributeValue[];
  variation_options: Variation[];
  // pivot?: OrderProductPivot
  // orders: Order[]
  shop?: any;
  description?: string;
  in_stock?: boolean;
  is_taxable?: boolean;
  sale_price?: number;
  sku?: string;
  gallery?: Attachment[];
  image?: Attachment;
  // status?: ProductStatus
  height?: string;
  length?: string;
  width?: string;
  price?: number;
  min_price?: number;
  max_price?: number;
  related_products?: Product[];
  quantity?: number;
  unit?: string;
  product_type: string;
  created_at?: Date;
  updated_at?: Date;
  orders_count?: number;
  sold: number;
};

export declare type Tag = {
  id: number;
  name: string;
  slug: string;
  icon?: string;
  image?: string;
  details?: string;
};

export declare type UserAddress = {
  country?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export declare type Order = {
  id: number | string;
  tracking_number: string;
  customer_id: number | string;
  // customer?: Maybe<User>;
  status: any;
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
  billing_address?: UserAddress;
  shipping_address?: UserAddress;
};

export type SettingsType = {
  id: number | string;
  options: SettingsOptions;
};

export type SettingsOptions = {
  siteTitle?: string;
  siteSubtitle?: string;
  currency?: string;
  logo?: Attachment;
  taxClass?: string;
  shippingClass?: string;
  contactDetails?: any;
};

export type Shop = {
  [key: string]: any;
};

export type Address = {
  [key: string]: any;
};

export type Social = {
  url: string;
  icon: string;
  label: string;
};

export type Instagram = {
  id: string;
  media_url: string;
  media_type: string;
  permalink: string;
  caption: string;
};

export type StaticBanner = {
  id: number;
  title: string;
  slug: string;
  image: {
    mobile: StaticBannerImage;
    desktop: StaticBannerImage;
  };
};

export type StaticBannerImage = {
  url: string;
  width: number;
  height: number;
};

export type CollectionBanner = {
  id: number;
  slug: string;
  image: string;
  title: string;
  description?: string;
};

export type FeatureBanner = {
  id: number;
  icon: string;
  title: string;
  description: string;
};
