import { Test, TestingModule } from '@nestjs/testing';
import { ActionService } from '../src/application/services/actionService';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Action } from '../src/domain/entities/action';

describe('ActionService', () => {
  let service: ActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActionService,
        {
          provide: getRepositoryToken(Action),
          useValue: {
            create: jest.fn().mockReturnValue({ save: jest.fn() }),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ActionService>(ActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an action', async () => {
    const result = await service.createAction('Test Action', 'Test Role');
    expect(result).toBeDefined();
    expect(result.description).toBe('Test Action');
    expect(result.role).toBe('Test Role');
  });
});