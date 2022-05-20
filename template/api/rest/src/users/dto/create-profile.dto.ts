import { PickType } from '@nestjs/swagger';
import { Profile } from '../entities/profile.entity';

export class CreateProfileDto extends PickType(Profile, [
  'avatar',
  'bio',
  'socials',
  'contact',
]) {
  customer: ConnectBelongsTo;
}

export class ConnectBelongsTo {
  connect: number;
}
