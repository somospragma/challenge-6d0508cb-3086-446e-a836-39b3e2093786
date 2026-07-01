import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Decision } from '../domain/entities/decision';

@Injectable()
export class DecisionService {
  constructor(
    @InjectRepository(Decision)
    private decisionRepository: Repository<Decision>
  ) {}

  async createDecision(description: string, role: string): Promise<Decision> {
    const decision = this.decisionRepository.create({ description, role });
    await this.decisionRepository.save(decision);
    return decision;
  }
}