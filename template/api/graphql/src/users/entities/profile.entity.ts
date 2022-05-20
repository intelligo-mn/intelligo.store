import { ObjectType, InputType } from '@nestjs/graphql';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from './user.entity';

@InputType('ProfileInputType', { isAbstract: true })
@ObjectType()
export class Profile extends CoreEntity {
  avatar?: Attachment;
  bio?: string;
  socials?: Social[];
  contact?: string;
  customer?: User;
}

@InputType('SocialInputType', { isAbstract: true })
@ObjectType()
export class Social {
  type: string;
  link: string;
}
