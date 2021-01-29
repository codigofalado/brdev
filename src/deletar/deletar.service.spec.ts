import { Test, TestingModule } from '@nestjs/testing';
import { DeletarService } from './deletar.service';

describe('DeletarService', () => {
  let service: DeletarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeletarService],
    }).compile();

    service = module.get<DeletarService>(DeletarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
