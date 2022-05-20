import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SettingsInput } from './dto/update-setting.input';
import { Setting } from './entities/setting.entity';
import settingsJson from './settings.json';

const settings = plainToClass(Setting, settingsJson);

@Injectable()
export class SettingsService {
  private settings: Setting = settings;
  // create(createSettingInput: CreateSettingInput) {
  //   return 'This action adds a new setting';
  // }

  getSettings() {
    return this.settings;
  }

  findOne(id: number) {
    return `This action returns a #${id} setting`;
  }

  updateSettings(updateSettingsInput: SettingsInput) {
    console.log(updateSettingsInput);
    return this.settings;
  }

  remove(id: number) {
    return `This action removes a #${id} setting`;
  }
}
