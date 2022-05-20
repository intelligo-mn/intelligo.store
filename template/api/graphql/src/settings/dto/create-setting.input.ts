import { InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreMutationOutput } from 'src/common/dto/core-mutation-output.model';
import { Setting } from '../entities/setting.entity';

@InputType()
export class CreateSettingsInput extends OmitType(Setting, [
  'created_at',
  'updated_at',
]) {}
@InputType()
export class ContactInput {
  subject: string;
  email: string;
  name: string;
  description: string;
}

@ObjectType()
export class ContactResponse extends CoreMutationOutput {}
