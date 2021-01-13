import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { OrderPackDTO } from '../../domain/dto/order-pack.dto';
import { OrderPackMapper } from './order-pack.mapper';
import { OrderPackRepository } from './order-pack.repository';

const relationshipNames = [];
relationshipNames.push('products');

@Injectable()
export class OrderPackService {
  logger = new Logger('OrderPackService');

  constructor(@InjectRepository(OrderPackRepository) private orderPackRepository: OrderPackRepository) {}

  async findById(id: string): Promise<OrderPackDTO | undefined> {
    const options = { relations: relationshipNames };
    const result = await this.orderPackRepository.findOne(id, options);
    return OrderPackMapper.fromEntityToDTO(result);
  }

  async findByfields(options: FindOneOptions<OrderPackDTO>): Promise<OrderPackDTO | undefined> {
    const result = await this.orderPackRepository.findOne(options);
    return OrderPackMapper.fromEntityToDTO(result);
  }

  async findAndCount(options: FindManyOptions<OrderPackDTO>): Promise<[OrderPackDTO[], number]> {
    options.relations = relationshipNames;
    const resultList = await this.orderPackRepository.findAndCount(options);
    const orderPackDTO: OrderPackDTO[] = [];
    if (resultList && resultList[0]) {
      resultList[0].forEach(orderPack => orderPackDTO.push(OrderPackMapper.fromEntityToDTO(orderPack)));
      resultList[0] = orderPackDTO;
    }
    return resultList;
  }

  async save(orderPackDTO: OrderPackDTO): Promise<OrderPackDTO | undefined> {
    const entity = OrderPackMapper.fromDTOtoEntity(orderPackDTO);
    const result = await this.orderPackRepository.save(entity);
    return OrderPackMapper.fromEntityToDTO(result);
  }

  async update(orderPackDTO: OrderPackDTO): Promise<OrderPackDTO | undefined> {
    const entity = OrderPackMapper.fromDTOtoEntity(orderPackDTO);
    const result = await this.orderPackRepository.save(entity);
    return OrderPackMapper.fromEntityToDTO(result);
  }

  async deleteById(id: string): Promise<void | undefined> {
    await this.orderPackRepository.delete(id);
    const entityFind = await this.findById(id);
    if (entityFind) {
      throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
    }
    return;
  }
}
