/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { OrderPackStatus } from "./enum/order-pack-status";
import { Product } from "./product.entity";

/**
 * A OrderPack.
 */
@Entity("order_pack")
export class OrderPack extends BaseEntity {
  @Column({ name: "name" })
  name: string;

  @Column({
    type: "date",
    name: "start_date",
    default: () => "CURRENT_DATE",
  })
  startDate: any;

  @Column({
    type: "date",
    name: "end_date",
    default: () => "CURRENT_DATE",
  })
  endDate: any;

  @Column({ type: "simple-enum", name: "status", enum: OrderPackStatus })
  status: OrderPackStatus;

  @ManyToMany((type) => Product)
  @JoinTable()
  products: Product[];
}
