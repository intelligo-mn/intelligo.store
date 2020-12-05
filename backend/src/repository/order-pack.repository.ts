import { EntityRepository, Repository } from 'typeorm';
import { OrderPack } from '../domain/order-pack.entity';

@EntityRepository(OrderPack)
export class OrderPackRepository extends Repository<OrderPack> {}
