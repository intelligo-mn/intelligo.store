import { CoreEntity } from '../../common/entities/core.entity';
import { Attachment } from '../../common/entities/attachment.entity';
import { ShopSocials } from '../../settings/entities/setting.entity';

export class Author extends CoreEntity {
  bio?: string;
  born?: string;
  cover_image?: Attachment;
  death?: string;
  image?: Attachment;
  is_approved?: boolean;
  languages?: string;
  name: string;
  products_count?: number;
  quote?: string;
  slug?: string;
  socials?: ShopSocials;
}
