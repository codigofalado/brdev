import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { DbService } from '../db.service';

@Module({
  providers: [UsersResolver, UsersService, DbService],
})
export class UsersModule {}
