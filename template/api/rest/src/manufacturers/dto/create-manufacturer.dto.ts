import { OmitType } from '@nestjs/swagger';
import { Manufacturer } from '../entities/manufacturer.entity';

export class CreateManufacturerDto extends OmitType(Manufacturer, [
  'id',
  'cover_image',
  'description',
  'image',
  'name',
  'products_count',
  'slug',
  'socials',
  'type',
  'type_id',
  'website',
]) {
  shop_id?: string;
}
