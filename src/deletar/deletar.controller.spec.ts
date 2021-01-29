import { Test, TestingModule } from '@nestjs/testing';
import { DeletarController } from './deletar.controller';

describe('DeletarController', () => {
  let controller: DeletarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeletarController],
    }).compile();

    controller = module.get<DeletarController>(DeletarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
