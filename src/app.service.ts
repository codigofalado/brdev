import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBrDev(): string {
    return 'Hello BR.DEV! ⌨️🐒';
  }
}
