/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Product } from "./product.entity";

/**
 * A OrderItem.
 */
@Entity("order_item")
export class OrderItem extends BaseEntity {
  @Column({ type: "integer", name: "quantity", nullable: true })
  quantity: number;

  @ManyToOne((type) => Product)
  product: Product;
}
