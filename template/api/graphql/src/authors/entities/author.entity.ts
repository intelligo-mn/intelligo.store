import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from '../../common/entities/core.entity';
import { Attachment } from '../../common/entities/attachment.entity';
import { ShopSocials } from '../../settings/entities/setting.entity';

@InputType('AuthorInputType', { isAbstract: true })
@ObjectType()
export class Author extends CoreEntity {
  name: string;
  is_approved?: boolean;
  slug?: string;
  bio?: string;
  quote?: string;
  @Field(() => Int)
  products_count?: number;
  born?: string;
  death?: string;
  languages?: string;
  socials?: ShopSocials[];
  image?: Attachment;
  cover_image?: Attachment;
}
