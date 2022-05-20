import { OmitType } from '@nestjs/swagger';
import { Author } from '../entities/author.entity';

export class CreateAuthorDto extends OmitType(Author, [
  'id',
  'bio',
  'born',
  'cover_image',
  'death',
  'image',
  'languages',
  'name',
  'products_count',
  'quote',
  'slug',
  'socials',
]) {
  shop_id?: string;
}
