/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import Product from "./product.entity";

/**
 * A Unit.
 */
@Entity("unit")
export default class Unit extends BaseEntity {
  @Column({ name: "name", nullable: false })
  name: string;

  @Column({ name: "value" })
  value: string;

  @ManyToOne((type) => Product)
  product: Product;
}
