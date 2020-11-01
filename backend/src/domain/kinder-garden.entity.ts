/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { ApiModelProperty } from '@nestjs/swagger';
import { validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';

/**
 * A KinderGarden.
 */
@Entity('kinder_garden')
export default class KinderGarden extends BaseEntity {
  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ type: 'integer', name: 'longitude' })
  longitude: number;

  @Column({ type: 'integer', name: 'latitude' })
  latitude: number;

  // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
