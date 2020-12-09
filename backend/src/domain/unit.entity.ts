/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Product } from "./product.entity";

/**
 * A Unit.
 */
@Entity("unit")
export class Unit extends BaseEntity {
  @Column({ name: "name" })
  name: string;

  @Column({ name: "description", nullable: true })
  description: string;

  @Column({ name: "value", nullable: true })
  value: string;

  @OneToMany((type) => Product, (other) => other.unit)
  products: Product[];
}
