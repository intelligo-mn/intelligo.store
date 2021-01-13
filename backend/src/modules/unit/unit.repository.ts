import { EntityRepository, Repository } from 'typeorm';
import { Unit } from '../../domain/unit.entity';

@EntityRepository(Unit)
export class UnitRepository extends Repository<Unit> {}
