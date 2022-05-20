import { AttributeValue } from 'src/attributes/entities/attribute-value.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { Type } from 'src/types/entities/type.entity';

enum ProductStatus {
  PUBLISH = 'publish',
  DRAFT = 'draft',
}

enum ProductType {
  SIMPLE = 'simple',
  VARIABLE = 'variable',
}

export class Product extends CoreEntity {
  name: string;
  slug: string;
  type: Type;
  type_id: number;
  product_type: ProductType;
  categories: Category[];
  tags?: Tag[];
  variations?: AttributeValue[];
  variation_options?: Variation[];
  pivot?: OrderProductPivot;
  orders?: Order[];
  shop: Shop;
  shop_id: number;
  related_products?: Product[];
  description: string;
  in_stock: boolean;
  is_taxable: boolean;
  sale_price?: number;
  max_price?: number;
  min_price?: number;
  sku?: string;
  gallery?: Attachment[];
  image?: Attachment;
  status: ProductStatus;
  height?: string;
  length?: string;
  width?: string;
  price?: number;
  quantity: number;
  unit: string;
}

export class OrderProductPivot {
  variation_option_id?: number;
  order_quantity: number;
  unit_price: number;
  subtotal: number;
}

export class Variation {
  id: number;
  title: string;
  price: number;
  sku: string;
  is_disable: boolean;
  sale_price?: number;
  quantity: number;
  options: VariationOption[];
}

export class VariationOption {
  name: string;
  value: string;
}

export class File extends CoreEntity {
  attachment_id: number;
  url: string;
  fileable_id: number;
}
