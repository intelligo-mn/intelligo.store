import { CoreEntity } from 'src/common/entities/core.entity';

export class OrderStatus extends CoreEntity {
  name: string;
  color: string;
  serial: number;
}
