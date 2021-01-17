/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { OrderStatus } from "./enum/order-status";
import { OrderItem } from "./order-item.entity";
import { User } from "./user.entity";

/**
 * A Order.
 */
@Entity("order")
export class Order extends BaseEntity {
  @Column({ type: "timestamp", name: "distribution_date" })
  distributionDate: any;

  @Column({ type: "simple-enum", name: "status", enum: OrderStatus })
  status: OrderStatus;

  @ManyToOne((type) => OrderItem)
  products: OrderItem[];

  @ManyToOne((type) => User)
  manager: User;
}
