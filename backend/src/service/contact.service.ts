import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { ContactDTO } from '../service/dto/contact.dto';
import { ContactMapper } from '../service/mapper/contact.mapper';
import { ContactRepository } from '../repository/contact.repository';

const relationshipNames = [];

@Injectable()
export class ContactService {
  logger = new Logger('ContactService');

  constructor(@InjectRepository(ContactRepository) private contactRepository: ContactRepository) {}

  async findById(id: string): Promise<ContactDTO | undefined> {
    const options = { relations: relationshipNames };
    const result = await this.contactRepository.findOne(id, options);
    return ContactMapper.fromEntityToDTO(result);
  }

  async findByfields(options: FindOneOptions<ContactDTO>): Promise<ContactDTO | undefined> {
    const result = await this.contactRepository.findOne(options);
    return ContactMapper.fromEntityToDTO(result);
  }

  async findAndCount(options: FindManyOptions<ContactDTO>): Promise<[ContactDTO[], number]> {
    options.relations = relationshipNames;
    const resultList = await this.contactRepository.findAndCount(options);
    const contactDTO: ContactDTO[] = [];
    if (resultList && resultList[0]) {
      resultList[0].forEach(contact => contactDTO.push(ContactMapper.fromEntityToDTO(contact)));
      resultList[0] = contactDTO;
    }
    return resultList;
  }

  async save(contactDTO: ContactDTO): Promise<ContactDTO | undefined> {
    const entity = ContactMapper.fromDTOtoEntity(contactDTO);
    const result = await this.contactRepository.save(entity);
    return ContactMapper.fromEntityToDTO(result);
  }

  async update(contactDTO: ContactDTO): Promise<ContactDTO | undefined> {
    const entity = ContactMapper.fromDTOtoEntity(contactDTO);
    const result = await this.contactRepository.save(entity);
    return ContactMapper.fromEntityToDTO(result);
  }

  async deleteById(id: string): Promise<void | undefined> {
    await this.contactRepository.delete(id);
    const entityFind = await this.findById(id);
    if (entityFind) {
      throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
    }
    return;
  }
}
