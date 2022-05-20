import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeDto } from './create-type.dto';

export class UpdateTypeDto extends PartialType(CreateTypeDto) {}
