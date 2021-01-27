/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Category } from "./category.entity";
import { OrganizationStatus } from "./enum/organization-status";
import { OrganizationType } from "./enum/organization-type";
import { User } from "./user.entity";

/**
 * A Organization.
 */
@Entity("organization")
export class Organization extends BaseEntity {
  @Column({ name: "name" })
  name: string;

  @Column({ type: "integer", name: "phone", nullable: true })
  phone: number;

  @Column({ name: "email", nullable: true })
  email: string;

  @Column({ name: "lat", nullable: true })
  lat: string;

  @Column({ name: "lon", nullable: true })
  lon: string;
}
