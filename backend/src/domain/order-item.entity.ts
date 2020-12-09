/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Order } from "./order.entity";
import { Product } from "./product.entity";

/**
 * A OrderItem.
 */
@Entity("order_item")
export class OrderItem extends BaseEntity {
  @Column({ type: "integer", name: "quantity", nullable: true })
  quantity: number;

  @OneToMany((type) => Order, (other) => other.products)
  orders: Order[];

  @ManyToOne((type) => Product)
  products: Product;
}
