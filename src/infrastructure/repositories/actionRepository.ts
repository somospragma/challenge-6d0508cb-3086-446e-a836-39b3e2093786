import { EntityRepository, Repository } from 'typeorm';
import { Action } from '../domain/entities/action';

@EntityRepository(Action)
export class ActionRepository extends Repository<Action> {}