import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { DbService } from '../db.service';
import { DeletarService } from './deletar.service';

describe('DeletarService', () => {
  let service: DeletarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService, DeletarService, DbService],
    }).compile();

    service = module.get<DeletarService>(DeletarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
