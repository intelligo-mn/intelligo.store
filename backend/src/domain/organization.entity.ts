/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { Contact } from './contact.entity';
import { Category } from './category.entity';
import { Customer } from './customer.entity';
import { OrganizationStatus } from './enumeration/organization-status';
import { OrganizationType } from './enumeration/organization-type';

/**
 * A Organization.
 */
@Entity('organization')
export class Organization extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ type: 'simple-enum', name: 'status', enum: OrganizationStatus })
  status: OrganizationStatus;

  @Column({ type: 'simple-enum', name: 'type', enum: OrganizationType })
  type: OrganizationType;

  @OneToOne(type => Contact)
  @JoinColumn()
  contact: Contact;

  @ManyToOne(type => Category)
  distributeType: Category;

  @ManyToOne(type => Customer)
  manager: Customer;

  // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
