import { Injectable } from '@nestjs/common';
import { User, Prisma, Profile } from '@prisma/client';
import { DbService } from '../db.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}

  async create(data: CreateUserInput): Promise<User> {
    return this.db.user.create({
      data,
    });
  }

  async findAll(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.UserWhereUniqueInput;
      where?: Prisma.UserWhereInput;
      orderBy?: Prisma.UserOrderByInput;
    } = {},
  ): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.db.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(id: string) {
    return this.db.user.findUnique({
      where: {
        id,
      },
      include: {
        profile: true,
      },
    });
  }

  async findOneByEmail(email: string) {
    return this.db.user.findUnique({
      where: {
        email,
      },
      include: {
        profile: true,
      },
    });
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    return this.db.user.update({
      where: {
        id,
      },
      data: updateUserInput,
    });
  }

  async remove(id: string): Promise<[Profile, User]> {
    const deleteProfile = this.db.profile.delete({
      where: {
        userId: id,
      },
    });
    const deleteUser = this.db.user.delete({
      where: {
        id,
      },
    });
    return this.db.$transaction([deleteProfile, deleteUser]);
  }
}
