/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { Product } from './product.entity';
import { Organization } from './organization.entity';

/**
 * A Category.
 */
@Entity('category')
export class Category extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @OneToMany(
    type => Product,
    other => other.category
  )
  products: Product[];

  @OneToMany(
    type => Organization,
    other => other.distributeType
  )
  organizations: Organization[];

}
