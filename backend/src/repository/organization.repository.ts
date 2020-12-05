import { EntityRepository, Repository } from 'typeorm';
import { Organization } from '../domain/organization.entity';

@EntityRepository(Organization)
export class OrganizationRepository extends Repository<Organization> {}
