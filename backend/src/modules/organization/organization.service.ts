import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, FindOneOptions } from "typeorm";
import Organization from "../../domain/organization";
import { OrganizationRepository } from "./organization.repository";

const relationshipNames = [];

@Injectable()
export class OrganizationService {
  logger = new Logger("OrganizationService");

  constructor(
    @InjectRepository(OrganizationRepository)
    private organizationRepository: OrganizationRepository
  ) {}

  async findById(id: string): Promise<Organization | undefined> {
    const options = { relations: relationshipNames };
    return await this.organizationRepository.findOne(id, options);
  }

  async findByfields(
    options: FindOneOptions<Organization>
  ): Promise<Organization | undefined> {
    return await this.organizationRepository.findOne(options);
  }

  async findAndCount(
    options: FindManyOptions<Organization>
  ): Promise<[Organization[], number]> {
    options.relations = relationshipNames;
    return await this.organizationRepository.findAndCount(options);
  }

  async save(Organization: Organization): Promise<Organization | undefined> {
    return await this.organizationRepository.save(Organization);
  }

  async update(Organization: Organization): Promise<Organization | undefined> {
    return await this.save(Organization);
  }

  async delete(Organization: Organization): Promise<Organization | undefined> {
    return await this.organizationRepository.remove(Organization);
  }
}
