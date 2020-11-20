/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import Product from "./product.entity";

/**
 * A ProductType.
 */
@Entity("category")
export default class Category extends BaseEntity {
  @Column({ name: "name", nullable: false })
  name: string;

  @ManyToOne((type) => Product)
  product: Product;
}
