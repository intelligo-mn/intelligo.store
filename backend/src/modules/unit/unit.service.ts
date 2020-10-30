import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Unit from "src/domain/unit.entity";
import { FindManyOptions, FindOneOptions } from "typeorm";
import { UnitRepository } from "./unit.repository";

const relationshipNames = [];
relationshipNames.push("product");

@Injectable()
export class UnitService {
  logger = new Logger("UnitService");

  constructor(
    @InjectRepository(UnitRepository) private unitRepository: UnitRepository
  ) {}

  async findById(id: string): Promise<Unit | undefined> {
    const options = { relations: relationshipNames };
    return await this.unitRepository.findOne(id, options);
  }

  async findByfields(options: FindOneOptions<Unit>): Promise<Unit | undefined> {
    return await this.unitRepository.findOne(options);
  }

  async findAndCount(
    options: FindManyOptions<Unit>
  ): Promise<[Unit[], number]> {
    options.relations = relationshipNames;
    return await this.unitRepository.findAndCount(options);
  }

  async save(unit: Unit): Promise<Unit | undefined> {
    return await this.unitRepository.save(unit);
  }

  async update(unit: Unit): Promise<Unit | undefined> {
    return await this.save(unit);
  }

  async delete(unit: Unit): Promise<Unit | undefined> {
    return await this.unitRepository.remove(unit);
  }
}
