import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Product } from 'src/products/entities/product.entity';
import { Type } from 'src/types/entities/type.entity';

@InputType('CategoryInputType', { isAbstract: true })
@ObjectType()
export class Category extends CoreEntity {
  name: string;
  slug: string;
  @Field(() => ID, { nullable: true })
  parent_id?: number;
  parent?: Category;
  @Field(() => [Category], { nullable: 'itemsAndList' })
  children?: Category[];
  @Field(() => [Category], { nullable: 'itemsAndList' })
  sub_categories?: Category[];
  @Field(() => Int, { nullable: true })
  products_count?: number;
  details?: string;
  image?: Attachment;
  icon?: string;
  type?: Type;
  @Field(() => [Product], { nullable: 'itemsAndList' })
  products?: Product[];
}
