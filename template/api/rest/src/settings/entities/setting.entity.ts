import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';

export class Setting extends CoreEntity {
  options: SettingsOptions;
}

export class SettingsOptions {
  siteTitle: string;
  siteSubtitle: string;
  currency: string;
  minimumOrderAmount: number;
  walletToCurrencyRatio: number;
  signupPoints: number;
  deliveryTime: DeliveryTime[];
  logo: Attachment;
  taxClass: string;
  shippingClass: string;
  seo: SeoSettings;
  google?: GoogleSettings;
  facebook?: FacebookSettings;
  contactDetails: ContactDetails;
}

export class DeliveryTime {
  title: string;
  description: string;
}

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

export class GoogleSettings {
  isEnable: boolean;
  tagManagerId: string;
}

export class FacebookSettings {
  isEnable: boolean;
  appId: string;
  pageId: string;
}

export class ContactDetails {
  socials: ShopSocials[];
  contact: string;
  location: Location;
  website: string;
}

export class ShopSocials {
  icon: string;
  url: string;
}

export class Location {
  lat: number;
  lng: number;
  city?: string;
  state: string;
  country: string;
  zip?: string;
  formattedAddress: string;
}
