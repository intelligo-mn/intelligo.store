import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from './user.entity';

export class Profile extends CoreEntity {
  avatar?: Attachment;
  bio?: string;
  socials?: Social[];
  contact?: string;
  customer?: User;
}

export class Social {
  type: string;
  link: string;
}
