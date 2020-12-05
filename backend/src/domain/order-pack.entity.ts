/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { Product } from './product.entity';
import { OrderPackStatus } from './enumeration/order-pack-status';

/**
 * A OrderPack.
 */
@Entity('order_pack')
export class OrderPack extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ type: 'timestamp', name: 'start_date' })
  startDate: any;

  @Column({ type: 'timestamp', name: 'end_date' })
  endDate: any;

  @Column({ type: 'simple-enum', name: 'status', enum: OrderPackStatus })
  status: OrderPackStatus;

  @ManyToOne(type => Product)
  products: Product;

  
}
