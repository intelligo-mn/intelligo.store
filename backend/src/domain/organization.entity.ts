/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Category } from "./category.entity";
import { Contact } from "./contact.entity";
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

  @OneToOne((type) => Contact)
  @JoinColumn()
  contact: Contact;

  @ManyToOne((type) => Category)
  distributeType: Category;

  @ManyToOne((type) => Customer)
  manager: Customer;
}
