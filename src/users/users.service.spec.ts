import { Test, TestingModule } from '@nestjs/testing';
import { DbService } from '../db.service';
import { CreateUserInput } from './dto/create-user.input';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

describe('UsersService', () => {
  let service: UsersService;
  let module: TestingModule | null = null;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [UsersService, DbService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should find all users', async () => {
    const users: User[] = await service.findAll();
    expect(users.length).toBe(3);
  });
  it('should create a new user', async () => {
    const user: CreateUserInput = {
      username: 'myTest0001',
      email: 'mytest@br.dev',
      password: 'test',
    };
    const result: User = await service.create(user);
    expect(result.id).toBeDefined();
  });
  it('should return a single user', async () => {
    // First we create a new user
    const user: CreateUserInput = {
      username: 'myTest0002',
      email: 'mytest2@br.dev',
      password: 'test',
    };
    const result: User = await service.create(user);
    const searchUser = await service.findOne(result.id);
    delete searchUser.profile;
    expect(searchUser).toStrictEqual(result);
  });
  it('should update a user', async () => {
    const newName = 'Fernando Santos Atualizado';
    const user = await service.findOneByEmail('fernando@br.dev');
    delete user.profile;
    user.name = newName;
    await service.update(user.id, user);
    const searchUser = await service.findOne(user.id);
    expect(searchUser.name).toBe(newName);
  });
  it('should delete a user and a profile', async () => {
    const user = await service.findOneByEmail('fernando@br.dev');
    const profile = user.profile;
    delete user.profile;
    const deletedUser = await service.remove(user.id);
    expect(deletedUser).toStrictEqual([profile, user]);
  });
  afterEach(async () => {
    if (module) {
      // close database connections
      await module.close();
    }
  });
});
