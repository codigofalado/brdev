import { Module } from '@nestjs/common';
import { DeletarService } from './deletar.service';
import { DeletarController } from './deletar.controller';
import { DbService } from 'src/db.service';
import { AuthorsResolver } from './resolvers/authors.resolver';
@Module({
  providers: [DeletarService, DbService, AuthorsResolver],
  controllers: [DeletarController]
})
export class DeletarModule {}
