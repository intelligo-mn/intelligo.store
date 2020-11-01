/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { ApiModelProperty } from '@nestjs/swagger';

import { OrderStatus } from './enumeration/order-status';

/**
 * A Order.
 */
@Entity('jhi_order')
export default class Order extends BaseEntity {
  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ type: 'date', name: 'start_date' })
  startDate: any;

  @Column({ type: 'date', name: 'end_date' })
  endDate: any;

  @Column({ type: 'integer', name: 'kinder_count' })
  kinderCount: number;

  @Column({ type: 'integer', name: 'product_count' })
  productCount: number;

  @Column({ type: 'enum', name: 'status', enum: OrderStatus })
  status: OrderStatus;

  // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
