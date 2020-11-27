/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Customer } from "./customer.entity";
import { OrderStatus } from "./enumeration/order-status";
import { OrderItem } from "./order-item.entity";

/**
 * A Order.
 */
@Entity("jhi_order")
export class Order extends BaseEntity {
  @Column({ type: "timestamp", name: "distribution_date" })
  distributionDate: any;

  @Column({ type: "simple-enum", name: "status", enum: OrderStatus })
  status: OrderStatus;

  @ManyToOne((type) => OrderItem)
  products: OrderItem;

  @ManyToOne((type) => Customer)
  manager: Customer;
}
