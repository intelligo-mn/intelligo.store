import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Product } from 'src/products/entities/product.entity';
import { Type } from 'src/types/entities/type.entity';

export class Category extends CoreEntity {
  name: string;
  slug: string;
  parent?: Category;
  children?: Category[];
  details?: string;
  image?: Attachment;
  icon?: string;
  type?: Type;
  products?: Product[];
}
