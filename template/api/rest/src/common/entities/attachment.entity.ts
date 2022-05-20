import { CoreEntity } from 'src/common/entities/core.entity';

export class Attachment extends CoreEntity {
  thumbnail?: string;
  original?: string;
}
