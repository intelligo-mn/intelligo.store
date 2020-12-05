import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../domain/order.entity';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {}
