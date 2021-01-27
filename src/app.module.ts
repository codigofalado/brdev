import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
