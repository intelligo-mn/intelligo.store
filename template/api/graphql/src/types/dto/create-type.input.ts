import { InputType, PickType } from '@nestjs/graphql';
import { Type } from '../entities/type.entity';

@InputType()
export class CreateTypeInput extends PickType(Type, [
  'name',
  'banners',
  'promotional_sliders',
  'settings',
  'icon',
]) {}
