/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import ProductType from "./product-type.entity";
import Unit from "./unit.entity";

/**
 * A Product.
 */
@Entity("product")
export default class Product extends BaseEntity {
  @Column({ name: "name", nullable: false })
  name: string;

  @Column({ name: "description" })
  description: string;

  @Column({ type: "decimal", name: "price", precision: 10, scale: 2 })
  price: number;

  @OneToMany((type) => ProductType, (other) => other.product)
  types: ProductType[];

  @OneToMany((type) => Unit, (other) => other.product)
  units: Unit[];
}
