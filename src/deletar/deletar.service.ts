import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {TestParent, TestChild, Prisma} from '@prisma/client';
import { DbService } from '../db.service';
@Injectable()
export class DeletarService {
    constructor(private configService: ConfigService, private db: DbService){}
    getTest(): string{
        return this.configService.get<string>('TEST_STRING');
    }
    async parent(testParentWhereUniqueInput: Prisma.TestParentWhereUniqueInput): Promise<TestParent | null> {
    return this.db.testParent.findUnique({
      where: testParentWhereUniqueInput,
    });
  }
  async parents(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TestParentWhereUniqueInput;
    where?: Prisma.TestParentWhereInput;
    orderBy?: Prisma.TestParentOrderByInput;
  }): Promise<TestParent[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.db.testParent.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
