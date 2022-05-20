import { UserAddress } from 'src/addresses/entities/address.entity';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Location, ShopSocials } from 'src/settings/entities/setting.entity';
import { User } from 'src/users/entities/user.entity';

export class Shop extends CoreEntity {
  owner_id: number;
  owner: User;
  staffs?: User[];
  is_active: boolean;
  orders_count: number;
  products_count: number;
  balance?: Balance;
  name: string;
  slug: string;
  description?: string;
  cover_image: Attachment;
  logo?: Attachment;
  address: UserAddress;
  settings?: ShopSettings;
}

export class Balance {
  id: number;
  admin_commission_rate: number;
  shop: Shop;
  total_earnings: number;
  withdrawn_amount: number;
  current_balance: number;
  payment_info: PaymentInfo;
}

export class PaymentInfo {
  account: string;
  name: string;
  email: string;
  bank: string;
}

export class ShopSettings {
  socials: ShopSocials[];
  contact: string;
  location: Location;
  website: string;
}
