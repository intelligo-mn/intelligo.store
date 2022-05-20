import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entities/setting.entity';
import settingsJson from './settings.json';

const settings = plainToClass(Setting, settingsJson);
@Injectable()
export class SettingsService {
  private settings: Setting = settings;
  create(createSettingDto: CreateSettingDto) {
    return this.settings;
  }

  findAll() {
    return this.settings;
  }

  findOne(id: number) {
    return `This action returns a #${id} setting`;
  }

  update(id: number, updateSettingDto: UpdateSettingDto) {
    return this.settings;
  }

  remove(id: number) {
    return `This action removes a #${id} setting`;
  }
}
