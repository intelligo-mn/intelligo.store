import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { CustomerDTO } from '../service/dto/customer.dto';
import { CustomerMapper } from '../service/mapper/customer.mapper';
import { CustomerRepository } from '../repository/customer.repository';

const relationshipNames = [];

@Injectable()
export class CustomerService {
  logger = new Logger('CustomerService');

  constructor(@InjectRepository(CustomerRepository) private customerRepository: CustomerRepository) {}

  async findById(id: string): Promise<CustomerDTO | undefined> {
    const options = { relations: relationshipNames };
    const result = await this.customerRepository.findOne(id, options);
    return CustomerMapper.fromEntityToDTO(result);
  }

  async findByfields(options: FindOneOptions<CustomerDTO>): Promise<CustomerDTO | undefined> {
    const result = await this.customerRepository.findOne(options);
    return CustomerMapper.fromEntityToDTO(result);
  }

  async findAndCount(options: FindManyOptions<CustomerDTO>): Promise<[CustomerDTO[], number]> {
    options.relations = relationshipNames;
    const resultList = await this.customerRepository.findAndCount(options);
    const customerDTO: CustomerDTO[] = [];
    if (resultList && resultList[0]) {
      resultList[0].forEach(customer => customerDTO.push(CustomerMapper.fromEntityToDTO(customer)));
      resultList[0] = customerDTO;
    }
    return resultList;
  }

  async save(customerDTO: CustomerDTO): Promise<CustomerDTO | undefined> {
    const entity = CustomerMapper.fromDTOtoEntity(customerDTO);
    const result = await this.customerRepository.save(entity);
    return CustomerMapper.fromEntityToDTO(result);
  }

  async update(customerDTO: CustomerDTO): Promise<CustomerDTO | undefined> {
    const entity = CustomerMapper.fromDTOtoEntity(customerDTO);
    const result = await this.customerRepository.save(entity);
    return CustomerMapper.fromEntityToDTO(result);
  }

  async deleteById(id: string): Promise<void | undefined> {
    await this.customerRepository.delete(id);
    const entityFind = await this.findById(id);
    if (entityFind) {
      throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
    }
    return;
  }
}
