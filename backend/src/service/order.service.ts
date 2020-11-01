import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import Order from '../domain/order.entity';
import { OrderRepository } from '../repository/order.repository';

const relationshipNames = [];

@Injectable()
export class OrderService {
  logger = new Logger('OrderService');

  constructor(@InjectRepository(OrderRepository) private orderRepository: OrderRepository) {}

  async findById(id: string): Promise<Order | undefined> {
    const options = { relations: relationshipNames };
    return await this.orderRepository.findOne(id, options);
  }

  async findByfields(options: FindOneOptions<Order>): Promise<Order | undefined> {
    return await this.orderRepository.findOne(options);
  }

  async findAndCount(options: FindManyOptions<Order>): Promise<[Order[], number]> {
    options.relations = relationshipNames;
    return await this.orderRepository.findAndCount(options);
  }

  async save(order: Order): Promise<Order | undefined> {
    return await this.orderRepository.save(order);
  }

  async update(order: Order): Promise<Order | undefined> {
    return await this.save(order);
  }

  async delete(order: Order): Promise<Order | undefined> {
    return await this.orderRepository.remove(order);
  }
}
