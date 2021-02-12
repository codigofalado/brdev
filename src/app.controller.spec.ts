import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let configService: ConfigService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({
        envFilePath: '.test.env',
      })],
      controllers: [AppController],
      providers: [AppService, ConfigService],
    }).compile();

    appController = app.get<AppController>(AppController);
    configService = app.get<ConfigService>(ConfigService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
    it('should return "Hello BR.DEV! ⌨️🐒"', () => {
      expect(appController.getBrDev()).toBe('Hello BR.DEV! ⌨️🐒');
    });
    it('should return "Homepage"', () => {
      expect(appController.home()).toBe("Homepage!");
    });
    it('Should return environment variables', () => {
      const db_user = configService.get<string>('DATABASE_USER');
      const db_pass = configService.get<string>('DATABASE_PASSWORD');
      expect(appController.getEnvironment()).toContain(db_user);
      expect(appController.getEnvironment()).toContain(db_pass);
    });
  });
});
