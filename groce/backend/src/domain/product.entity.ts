/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Category } from "./category.entity";

/**
 * A Product.
 */
@Entity("product")
export class Product extends BaseEntity {
  @Column({ name: "name" })
  name: string;

  @Column({ name: "description", nullable: true })
  description: string;

  @ManyToOne((type) => Category)
  category: Category;

  @Column({ name: "price", nullable: true })
  price: string;

  @Column({ name: "active", nullable: true })
  active: boolean;

  @Column({ name: "comment", nullable: true })
  comment: string;
}
