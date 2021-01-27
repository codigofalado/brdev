import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private configService: ConfigService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('brdev')
  getBrDev(): string {
    return this.appService.getBrDev();
  }
  @Get('environment')
  getEnvironment(): string {
    const dbpass = this.configService.get<string>('DATABASE_PASSWORD');
    const dbuser = this.configService.get<string>('DATABASE_USER');
    return `Database User: ${dbuser} - <br>
    Database Pass: ${dbpass}
    `;
  }
}
