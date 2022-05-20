import { OmitType } from '@nestjs/swagger';
import { Setting } from '../entities/setting.entity';

export class CreateSettingDto extends OmitType(Setting, [
  'created_at',
  'updated_at',
]) {}
