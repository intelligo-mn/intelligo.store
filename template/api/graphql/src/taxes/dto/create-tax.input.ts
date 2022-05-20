import { InputType, OmitType } from '@nestjs/graphql';
import { Tax } from '../entities/tax.entity';

@InputType()
export class CreateTaxInput extends OmitType(Tax, [
  'id',
  'created_at',
  'updated_at',
]) {}
