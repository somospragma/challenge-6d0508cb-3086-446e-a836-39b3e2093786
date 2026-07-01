import { EntityRepository, Repository } from 'typeorm';
import { Decision } from '../domain/entities/decision';

@EntityRepository(Decision)
export class DecisionRepository extends Repository<Decision> {}