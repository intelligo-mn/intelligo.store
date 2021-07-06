import { Moment } from 'moment';
import { IOrderItem } from 'src/app/shared/model/order-item.model';
import { ICustomer } from 'src/app/shared/model/customer.model';
import { OrderStatus } from 'src/app/shared/model/enums/order-status.model';

export interface IOrder {
  id?: number;
  distributionDate?: Moment;
  status?: OrderStatus;
  products?: IOrderItem;
  manager?: ICustomer;
}

export class Order implements IOrder {
  constructor(
    public id?: number,
    public distributionDate?: Moment,
    public status?: OrderStatus,
    public products?: IOrderItem,
    public manager?: ICustomer
  ) {}
}
