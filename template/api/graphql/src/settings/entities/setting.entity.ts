import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';

@InputType('SettingInputType', { isAbstract: true })
@ObjectType()
export class Setting extends CoreEntity {
  options: SettingsOptions;
}

@InputType('SettingsOptionsInputType', { isAbstract: true })
@ObjectType()
export class SettingsOptions {
  siteTitle: string;
  siteSubtitle: string;
  currency: string;
  minimumOrderAmount: number;
  @Field(() => Int)
  currencyToWalletRatio?: number;
  @Field(() => Int)
  signupPoints?: number;
  deliveryTime: DeliveryTime[];
  logo: Attachment;
  taxClass: string;
  shippingClass: string;
  seo: SeoSettings;
  google?: GoogleSettings;
  facebook?: FacebookSettings;
  contactDetails: ContactDetails;
  useOtp: boolean;
}

@InputType('DeliveryTimeInputType', { isAbstract: true })
@ObjectType()
export class DeliveryTime {
  title: string;
  description: string;
}

@InputType('SeoSettingsInputType', { isAbstract: true })
@ObjectType()
export class SeoSettings {
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: Attachment;
  twitterHandle?: string;
  twitterCardType?: string;
  metaTags?: string;
  canonicalUrl?: string;
}

@InputType('GoogleSettingsInputType', { isAbstract: true })
@ObjectType()
export class GoogleSettings {
  isEnable: boolean;
  tagManagerId: string;
}

@InputType('FacebookSettingsInputType', { isAbstract: true })
@ObjectType()
export class FacebookSettings {
  isEnable: boolean;
  appId: string;
  pageId: string;
}

@InputType('ContactDetailsInputType', { isAbstract: true })
@ObjectType()
export class ContactDetails {
  socials: ShopSocials[];
  contact: string;
  location: Location;
  website: string;
}

@InputType('ShopSocialsInputType', { isAbstract: true })
@ObjectType()
export class ShopSocials {
  icon: string;
  url: string;
}

@InputType('LocationInputType', { isAbstract: true })
@ObjectType()
export class Location {
  lat?: number;
  lng?: number;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  formattedAddress?: string;
}
