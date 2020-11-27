/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Category } from "./category.entity";
import { Unit } from "./unit.entity";

/**
 * Бүтээгдэхүүн
 */
@Entity("product")
export class Product extends BaseEntity {
  @Column({ name: "name" })
  name: string;

  @Column({ name: "description", nullable: true })
  description: string;

  @ManyToOne((type) => Category)
  category: Category;

  @ManyToOne((type) => Unit)
  unit: Unit;
}
