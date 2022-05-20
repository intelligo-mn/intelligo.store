import { PartialType } from '@nestjs/swagger';
import { CreateManufacturerDto } from './create-manufacturer.dto';

export class UpdateManufacturerDto extends PartialType(CreateManufacturerDto) {}
