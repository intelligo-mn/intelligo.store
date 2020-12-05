/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { OrderItem } from './order-item.entity';
import { Customer } from './customer.entity';
import { OrderStatus } from './enumeration/order-status';

/**
 * A Order.
 */
@Entity('jhi_order')
export class Order extends BaseEntity {
  @Column({ type: 'timestamp', name: 'distribution_date' })
  distributionDate: any;

  @Column({ type: 'simple-enum', name: 'status', enum: OrderStatus })
  status: OrderStatus;

  @ManyToOne(type => OrderItem)
  products: OrderItem;

  @ManyToOne(type => Customer)
  manager: Customer;

  
}
