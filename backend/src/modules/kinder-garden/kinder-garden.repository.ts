import KinderGarden from 'src/domain/kinder-garden.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(KinderGarden)
export class KinderGardenRepository extends Repository<KinderGarden> {}
