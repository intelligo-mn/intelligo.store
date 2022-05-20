import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';

export class Type extends CoreEntity {
  name: string;
  slug: string;
  image: Attachment;
  icon: string;
  banners?: Banner[];
  promotional_sliders?: Attachment[];
  settings?: TypeSettings;
}

export class Banner {
  id: number;
  title?: string;
  description?: string;
  image: Attachment;
}

export class TypeSettings {
  isHome: boolean;
  layoutType: string;
  productCard: string;
}
