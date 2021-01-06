/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base/base.entity";

/**
 * A Contact.
 */
@Entity("contact")
export class Contact extends BaseEntity {
  
  @Column({ name: "organizationId", nullable: true })
  organizationId: string;

  @Column({ type: "integer", name: "phone", nullable: true })
  phone: number;

  @Column({ name: "email", nullable: true })
  email: string;

  @Column({ name: "address", nullable: true })
  address: string;

  @Column({ name: "lat", nullable: true })
  lat: string;

  @Column({ name: "lon", nullable: true })
  lon: string;
}
