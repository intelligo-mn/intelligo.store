import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { OrderItemDTO } from '../service/dto/order-item.dto';
import { OrderItemMapper } from '../service/mapper/order-item.mapper';
import { OrderItemRepository } from '../repository/order-item.repository';

const relationshipNames = [];
relationshipNames.push('products');

@Injectable()
export class OrderItemService {
  logger = new Logger('OrderItemService');

  constructor(@InjectRepository(OrderItemRepository) private orderItemRepository: OrderItemRepository) {}

  async findById(id: string): Promise<OrderItemDTO | undefined> {
    const options = { relations: relationshipNames };
    const result = await this.orderItemRepository.findOne(id, options);
    return OrderItemMapper.fromEntityToDTO(result);
  }

  async findByfields(options: FindOneOptions<OrderItemDTO>): Promise<OrderItemDTO | undefined> {
    const result = await this.orderItemRepository.findOne(options);
    return OrderItemMapper.fromEntityToDTO(result);
  }

  async findAndCount(options: FindManyOptions<OrderItemDTO>): Promise<[OrderItemDTO[], number]> {
    options.relations = relationshipNames;
    const resultList = await this.orderItemRepository.findAndCount(options);
    const orderItemDTO: OrderItemDTO[] = [];
    if (resultList && resultList[0]) {
      resultList[0].forEach(orderItem => orderItemDTO.push(OrderItemMapper.fromEntityToDTO(orderItem)));
      resultList[0] = orderItemDTO;
    }
    return resultList;
  }

  async save(orderItemDTO: OrderItemDTO): Promise<OrderItemDTO | undefined> {
    const entity = OrderItemMapper.fromDTOtoEntity(orderItemDTO);
    const result = await this.orderItemRepository.save(entity);
    return OrderItemMapper.fromEntityToDTO(result);
  }

  async update(orderItemDTO: OrderItemDTO): Promise<OrderItemDTO | undefined> {
    const entity = OrderItemMapper.fromDTOtoEntity(orderItemDTO);
    const result = await this.orderItemRepository.save(entity);
    return OrderItemMapper.fromEntityToDTO(result);
  }

  async deleteById(id: string): Promise<void | undefined> {
    await this.orderItemRepository.delete(id);
    const entityFind = await this.findById(id);
    if (entityFind) {
      throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
    }
    return;
  }
}
