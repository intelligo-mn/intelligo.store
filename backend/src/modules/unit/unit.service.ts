import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { UnitDTO } from '../../domain/dto/unit.dto';
import { UnitMapper } from './unit.mapper';
import { UnitRepository } from './unit.repository';

const relationshipNames = [];

@Injectable()
export class UnitService {
  logger = new Logger('UnitService');

  constructor(@InjectRepository(UnitRepository) private unitRepository: UnitRepository) {}

  async findById(id: string): Promise<UnitDTO | undefined> {
    const options = { relations: relationshipNames };
    const result = await this.unitRepository.findOne(id, options);
    return UnitMapper.fromEntityToDTO(result);
  }

  async findByfields(options: FindOneOptions<UnitDTO>): Promise<UnitDTO | undefined> {
    const result = await this.unitRepository.findOne(options);
    return UnitMapper.fromEntityToDTO(result);
  }

  async findAndCount(options: FindManyOptions<UnitDTO>): Promise<[UnitDTO[], number]> {    
    options.relations = relationshipNames;
    const resultList = await this.unitRepository.findAndCount(options);
    const unitDTO: UnitDTO[] = [];
    if (resultList && resultList[0]) {
      resultList[0].forEach(unit => unitDTO.push(UnitMapper.fromEntityToDTO(unit)));
      resultList[0] = unitDTO;
    }
    return resultList;
  }

  async save(unitDTO: UnitDTO): Promise<UnitDTO | undefined> {
    const entity = UnitMapper.fromDTOtoEntity(unitDTO);
    const result = await this.unitRepository.save(entity);
    return UnitMapper.fromEntityToDTO(result);
  }

  async update(unitDTO: UnitDTO): Promise<UnitDTO | undefined> {
    const entity = UnitMapper.fromDTOtoEntity(unitDTO);
    const result = await this.unitRepository.save(entity);
    return UnitMapper.fromEntityToDTO(result);
  }

  async deleteById(id: string): Promise<void | undefined> {
    await this.unitRepository.delete(id);
    const entityFind = await this.findById(id);
    if (entityFind) {
      throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
    }
    return;
  }
}
