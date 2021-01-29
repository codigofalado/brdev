import { Module } from '@nestjs/common';
import { DeletarService } from './deletar.service';

@Module({
  providers: [DeletarService]
})
export class DeletarModule {}
