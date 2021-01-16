/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Category } from "./category.entity";
import { Customer } from "./customer.entity";
import { OrganizationStatus } from "./enum/organization-status";
import { OrganizationType } from "./enum/organization-type";

/**
 * A Organization.
 */
@Entity("organization")
export class Organization extends BaseEntity {
  @Column({ name: "name" })
  name: string;

  @Column({ type: "simple-enum", name: "status", enum: OrganizationStatus })
  status: OrganizationStatus;

  @Column({ type: "simple-enum", name: "type", enum: OrganizationType })
  type: OrganizationType;

  @ManyToOne((type) => Category)
  distributeType: Category;

  @Column({ type: "integer", name: "phone", nullable: true })
  phone: number;

  @Column({ name: "email", nullable: true })
  email: string;

  @Column({ name: "address", nullable: true })
  address: string;

  @ManyToOne((type) => Customer)
  manager: Customer;
}
