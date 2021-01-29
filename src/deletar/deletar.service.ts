import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DeletarService {
    constructor(private configService: ConfigService){}
    getTest(): string{
        return this.configService.get<string>('TEST_STRING');
    }
}
