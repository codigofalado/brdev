import { Module } from '@nestjs/common';
import { DeletarService } from './deletar.service';
import { DeletarController } from './deletar.controller';

@Module({
  providers: [DeletarService],
  controllers: [DeletarController]
})
export class DeletarModule {}
