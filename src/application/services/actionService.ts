import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Action } from '../domain/entities/action';

@Injectable()
export class ActionService {
  constructor(
    @InjectRepository(Action)
    private actionRepository: Repository<Action>
  ) {}

  async createAction(description: string, role: string): Promise<Action> {
    const action = this.actionRepository.create({ description, role });
    await this.actionRepository.save(action);
    return action;
  }
}