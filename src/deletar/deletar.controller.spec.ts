import { NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { DbService } from '../db.service';
import { DeletarController } from './deletar.controller';
import { DeletarService } from './deletar.service';
import {TestParent, TestChild, Prisma} from '@prisma/client';

describe('DeletarController', () => {
  let controller: DeletarController;
  let deletarService: DeletarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeletarController],
      providers: [ConfigService, DbService, DeletarService]
    }).compile();

    controller = module.get<DeletarController>(DeletarController);
    deletarService = module.get<DeletarService>(DeletarService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it("should see homepage", () => {
    expect(controller.home()).toContain('💣');
  });
  it('should return getTest from DeletarService', () => {
    expect(controller.fernando()).toBe(deletarService.getTest());
  });
  it('should return colored text', () => {
    let nome = 'Fernando';
    expect(controller.testeParrudo(nome)).toContain("FERNANDO");
    expect(controller.testeParrudo(nome)).toContain("peru");
  });
  it('should return qualquer coisa', () => {
    expect(controller.qualquercoisa()).toBe("Qualquer Coisa! 🐗");
  });
  it('should return db items', () => {
    expect(controller.getTestParent()).toStrictEqual(deletarService.parents({}));
  });
  it('should return db item by id', async () => {
    const object = {
      id: 1,
      email: 'test@test.com',
      name: 'Fernando Santos',
      emoji: '🐒'
    };
    jest.spyOn(deletarService, 'parent').mockResolvedValue(object);
    expect(await controller.getTestParentById('1')).toBe(object);
  });
  it('should return not found', async (done) => {
    // jest.spyOn(controller, 'getTestParentById').mockResolvedValue(null)
    try {
      let ret = await controller.getTestParentById('11');
      console.log(ret);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
      done();
    }
  });
});
