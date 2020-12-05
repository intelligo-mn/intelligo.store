import { EntityRepository, Repository } from 'typeorm';
import { OrderItem } from '../domain/order-item.entity';

@EntityRepository(OrderItem)
export class OrderItemRepository extends Repository<OrderItem> {}
