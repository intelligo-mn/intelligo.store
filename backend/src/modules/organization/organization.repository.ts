import { EntityRepository, Repository } from 'typeorm';
import Organization from '../../domain/organization';
@EntityRepository(Organization)
export class OrganizationRepository extends Repository<Organization> {}
