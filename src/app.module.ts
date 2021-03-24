import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DbService } from './db.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule, 
    // @TODO: Re-enable GraphQL
    // GraphQLModule.forRoot({
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
