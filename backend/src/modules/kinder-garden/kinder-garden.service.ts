import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import KinderGarden from '../../domain/kinder-garden.entity';
import { KinderGardenRepository } from './kinder-garden.repository';

const relationshipNames = [];

@Injectable()
export class KinderGardenService {
  logger = new Logger('KinderGardenService');

  constructor(@InjectRepository(KinderGardenRepository) private kinderGardenRepository: KinderGardenRepository) {}

  async findById(id: string): Promise<KinderGarden | undefined> {
    const options = { relations: relationshipNames };
    return await this.kinderGardenRepository.findOne(id, options);
  }

  async findByfields(options: FindOneOptions<KinderGarden>): Promise<KinderGarden | undefined> {
    return await this.kinderGardenRepository.findOne(options);
  }

  async findAndCount(options: FindManyOptions<KinderGarden>): Promise<[KinderGarden[], number]> {
    options.relations = relationshipNames;
    return await this.kinderGardenRepository.findAndCount(options);
  }

  async save(kinderGarden: KinderGarden): Promise<KinderGarden | undefined> {
    return await this.kinderGardenRepository.save(kinderGarden);
  }

  async update(kinderGarden: KinderGarden): Promise<KinderGarden | undefined> {
    return await this.save(kinderGarden);
  }

  async delete(kinderGarden: KinderGarden): Promise<KinderGarden | undefined> {
    return await this.kinderGardenRepository.remove(kinderGarden);
  }
}
