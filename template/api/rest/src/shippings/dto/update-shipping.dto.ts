import { PartialType } from '@nestjs/swagger';
import { CreateShippingDto } from './create-shipping.dto';

export class UpdateShippingDto extends PartialType(CreateShippingDto) {}
