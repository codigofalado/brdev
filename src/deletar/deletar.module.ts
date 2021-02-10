import { Module } from '@nestjs/common';
import { DeletarService } from './deletar.service';
import { DeletarController } from './deletar.controller';
import { DbService } from 'src/db.service';
@Module({
  providers: [DeletarService, DbService],
  controllers: [DeletarController]
})
export class DeletarModule {}
