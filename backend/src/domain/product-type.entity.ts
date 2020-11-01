/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import Product from "./product.entity";

/**
 * A ProductType.
 */
@Entity("product_type")
export default class ProductType extends BaseEntity {
  @Column({ name: "name", nullable: false })
  name: string;

  @ManyToOne((type) => Product)
  product: Product;

  // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
