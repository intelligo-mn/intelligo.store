/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { Organization } from './organization.entity';
import { Order } from './order.entity';

/**
 * A Customer.
 */
@Entity('customer')
export class Customer extends BaseEntity {
  @Column({ name: 'name', nullable: true })
  name: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'address_line_1' })
  addressLine1: string;

  @Column({ name: 'address_line_2', nullable: true })
  addressLine2: string;

  @Column({ name: 'city' })
  city: string;

  @Column({ name: 'country' })
  country: string;

  @OneToMany(
    type => Organization,
    other => other.manager
  )
  organizations: Organization[];

  @OneToMany(
    type => Order,
    other => other.manager
  )
  orders: Order[];

  // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
