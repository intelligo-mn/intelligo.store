import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { ContactDTO } from '../service/dto/contact.dto';
import { ContactMapper } from '../service/mapper/contact.mapper';
import { ContactRepository } from '../modules/organization/contact.repository';

const relationshipNames = [];

@Injectable()
export class ContactService {
  logger = new Logger('ContactService');

  constructor(@InjectRepository(ContactRepository) private contactRepository: ContactRepository) {}

  async findById(id: string): Promise<ContactDTO | undefined> {
    const result = await this.contactRepository.findOne({ where: { organizationId: id } })
    return ContactMapper.fromEntityToDTO(result);
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
