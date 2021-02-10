import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DeletarModule } from './deletar/deletar.module';
import { DbService } from './db.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), DeletarModule],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
