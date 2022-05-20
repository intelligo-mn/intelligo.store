import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SettingsService } from './settings.service';
import { Setting } from './entities/setting.entity';
import { ContactInput, ContactResponse } from './dto/create-setting.input';
import { SettingsInput } from './dto/update-setting.input';

@Resolver(() => Setting)
export class SettingsResolver {
  constructor(private readonly settingsService: SettingsService) {}

  // @Mutation(() => Setting)
  // createSetting(
  //   @Args('createSettingInput') createSettingInput: CreateSettingInput,
  // ) {
  //   return this.settingsService.create(createSettingInput);
  // }

  @Query(() => Setting, { name: 'settings' })
  findAll() {
    return this.settingsService.getSettings();
  }

  // @Query(() => Setting, { name: 'setting' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.settingsService.findOne(id);
  // }

  @Mutation(() => Setting)
  updateSettings(@Args('input') updateSettingInput: SettingsInput) {
    return this.settingsService.updateSettings(updateSettingInput);
  }

  // @Mutation(() => Setting)
  // removeSetting(@Args('id', { type: () => Int }) id: number) {
  //   return this.settingsService.remove(id);
  // }
  @Mutation(() => ContactResponse)
  contactUs(@Args('input', { nullable: true }) contactInput?: ContactInput) {
    console.log(contactInput);
    return {
      message: 'Thanks for contacting us!',
      success: true,
    };
  }
}
