import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from '../../common/entities/core.entity';
import { Attachment } from '../../common/entities/attachment.entity';
import { ShopSocials } from '../../settings/entities/setting.entity';
import { Type } from '../../types/entities/type.entity';

@InputType('ManufacturerInputType', { isAbstract: true })
@ObjectType()
export class Manufacturer extends CoreEntity {
  name: string;
  slug?: string;
  @Field(() => ID)
  type_id?: number;
  @Field(() => Int)
  products_count?: number;
  type: Type;
  is_approved?: boolean;
  description?: string;
  website?: string;
  socials?: ShopSocials[];
  image?: Attachment;
  cover_image?: Attachment;
}
