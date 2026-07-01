import { Test, TestingModule } from '@nestjs/testing';
import { DecisionService } from '../src/application/services/decisionService';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Decision } from '../src/domain/entities/decision';

describe('DecisionService', () => {
  let service: DecisionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DecisionService,
        {
          provide: getRepositoryToken(Decision),
          useValue: {
            create: jest.fn().mockReturnValue({ save: jest.fn() }),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<DecisionService>(DecisionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a decision', async () => {
    const result = await service.createDecision('Test Decision', 'Test Role');
    expect(result).toBeDefined();
    expect(result.description).toBe('Test Decision');
    expect(result.role).toBe('Test Role');
  });
});