import { CoreEntity } from 'src/common/entities/core.entity';

export class Tax extends CoreEntity {
  name: string;
  rate: number;
  is_global: boolean;
  country?: string;
  state?: string;
  zip?: string;
  city?: string;
  priority?: number;
  on_shipping: boolean;
}
