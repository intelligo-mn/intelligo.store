import { Moment } from 'moment';
import { IOrderItem } from 'src/app/shared/model/order-item.model';
import { IUser } from 'src/app/shared/model/user.model';
import { OrderStatus } from 'src/app/shared/model/enums/order-status.model';

export interface IOrder {
  id?: number;
  distributionDate?: Moment;
  status?: OrderStatus;
  products?: IOrderItem;
  manager?: IUser;
}

export class Order implements IOrder {
  constructor(
    public id?: number,
    public distributionDate?: Moment,
    public status?: OrderStatus,
    public products?: IOrderItem,
    public manager?: IUser
  ) {}
}
