/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base/base.entity";

/**
 * A KinderGarden.
 */
@Entity("organiztion")
export default class Organization extends BaseEntity {
  @Column({ name: "name", nullable: false })
  name: string;

  @Column({ name: "description" })
  description: string;

  @Column({ type: "integer", name: "longitude" })
  longitude: number;

  @Column({ type: "integer", name: "latitude" })
  latitude: number;
}
