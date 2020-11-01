import { EntityRepository, Repository } from 'typeorm';
import KinderGarden from '../domain/kinder-garden.entity';

@EntityRepository(KinderGarden)
export class KinderGardenRepository extends Repository<KinderGarden> {}
