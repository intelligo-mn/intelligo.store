/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Order } from "./order.entity";
import { Organization } from "./organization.entity";

/**
 * A Customer.
 */
@Entity("customer")
export class Customer extends BaseEntity {
  @Column({ name: "name", nullable: true })
  name: string;

  @Column({ name: "phone" })
  phone: string;

  @Column({ name: "address_line_1" })
  addressLine1: string;

  @Column({ name: "address_line_2", nullable: true })
  addressLine2: string;

  @Column({ name: "city" })
  city: string;

  @Column({ name: "country" })
  country: string;

  @OneToMany((type) => Organization, (other) => other.manager)
  organizations: Organization[];

  @OneToMany((type) => Order, (other) => other.manager)
  orders: Order[];
}
