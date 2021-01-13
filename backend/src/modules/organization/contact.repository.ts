import { EntityRepository, Repository } from 'typeorm';
import { Contact } from '../../domain/contact.entity';

@EntityRepository(Contact)
export class ContactRepository extends Repository<Contact> {}
