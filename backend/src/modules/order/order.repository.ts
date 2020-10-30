import Order from "src/domain/order.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {}
