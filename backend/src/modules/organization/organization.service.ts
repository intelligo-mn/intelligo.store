import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { OrganizationDTO } from '../../domain/dto/organization.dto';
import { OrganizationMapper } from './organization.mapper';
import { OrganizationRepository } from './organization.repository';

const relationshipNames = [];
relationshipNames.push('distributeType');
relationshipNames.push('manager');

@Injectable()
export class OrganizationService {
  logger = new Logger('OrganizationService');

  constructor(@InjectRepository(OrganizationRepository) private organizationRepository: OrganizationRepository) {}

  async findById(id: string): Promise<OrganizationDTO | undefined> {
    const options = { relations: relationshipNames };
    const result = await this.organizationRepository.findOne(id, options);
    return OrganizationMapper.fromEntityToDTO(result);
  }

  async findByfields(options: FindOneOptions<OrganizationDTO>): Promise<OrganizationDTO | undefined> {
    const result = await this.organizationRepository.findOne(options);
    return OrganizationMapper.fromEntityToDTO(result);
  }

  async findAndCount(options: FindManyOptions<OrganizationDTO>): Promise<[OrganizationDTO[], number]> {
    options.relations = relationshipNames;
    const resultList = await this.organizationRepository.findAndCount(options);
    const organizationDTO: OrganizationDTO[] = [];
    if (resultList && resultList[0]) {
      resultList[0].forEach(organization => organizationDTO.push(OrganizationMapper.fromEntityToDTO(organization)));
      resultList[0] = organizationDTO;
    }
    return resultList;
  }

  async save(organizationDTO: OrganizationDTO): Promise<OrganizationDTO | undefined> {
    const entity = OrganizationMapper.fromDTOtoEntity(organizationDTO);
    const result = await this.organizationRepository.save(entity);
    return OrganizationMapper.fromEntityToDTO(result);
  }

  async update(organizationDTO: OrganizationDTO): Promise<OrganizationDTO | undefined> {
    const entity = OrganizationMapper.fromDTOtoEntity(organizationDTO);
    const result = await this.organizationRepository.save(entity);
    return OrganizationMapper.fromEntityToDTO(result);
  }

  async deleteById(id: string): Promise<void | undefined> {
    await this.organizationRepository.delete(id);
    const entityFind = await this.findById(id);
    if (entityFind) {
      throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
    }
    return;
  }
}
