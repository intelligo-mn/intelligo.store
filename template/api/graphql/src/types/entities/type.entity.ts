import { InputType, ObjectType } from '@nestjs/graphql';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
@InputType('TypeInputType', { isAbstract: true })
@ObjectType()
export class Type extends CoreEntity {
  name: string;
  slug: string;
  image: Attachment;
  icon: string;
  banners?: Banner[];
  promotional_sliders?: Attachment[];
  settings?: TypeSettings;
}

@InputType('BannerInputType', { isAbstract: true })
@ObjectType()
export class Banner extends CoreEntity {
  title?: string;
  description?: string;
  image: Attachment;
}

@InputType('TypeSettingsInputType', { isAbstract: true })
@ObjectType()
export class TypeSettings {
  isHome: boolean;
  layoutType: string;
  productCard: string;
}
