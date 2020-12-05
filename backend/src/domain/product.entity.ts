/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { Category } from './category.entity';
import { Unit } from './unit.entity';

/**
 * A Product.
 */
@Entity('product')
export class Product extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @ManyToOne(type => Category)
  category: Category;

  @ManyToOne(type => Unit)
  unit: Unit;

  
}
