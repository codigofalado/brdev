import { Test, TestingModule } from '@nestjs/testing';
import { DbService } from '../db.service';
import { CreateUserInput } from './dto/create-user.input';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let module: TestingModule | null;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [UsersResolver, UsersService, DbService],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
  it('should create a user', async () => {
    const newUser: CreateUserInput = {
      username: 'testresolver',
      name: 'User Test Resolver',
      email: 'testresolver@br.dev',
      password: '12345678',
    };
    const createNewUser = await resolver.createUser(newUser);
    expect(createNewUser.id).toBeDefined();
  });
  it('should find all users', async () => {
    const users = await resolver.findAll();
    expect(users.length).toBeGreaterThan(0);
  });
  it('should find one user by id', async () => {
    const newUser: CreateUserInput = {
      username: 'testresolver2',
      name: 'User Test Resolver',
      email: 'testresolver2@br.dev',
      password: '12345678',
    };
    const createNewUser = await resolver.createUser(newUser);
    const user = await resolver.findOne(createNewUser.id);
    expect(user.id).toBe(createNewUser.id);
  });
  it('should find one user by e-mail', async () => {
    const user = await resolver.findOne(null, 'user@br.dev');
    expect(user.role).toBe('USER');
  });
  it('should update a user', async () => {
    const user = await resolver.findOne(null, 'user@br.dev');
    const updateUser = await resolver.updateUser({
      id: user.id,
      name: 'Fernando Santos Atualizado',
    });
    expect(updateUser.name).toBe('Fernando Santos Atualizado');
  });
  it('should delete a user and a profile', async () => {
    const user = await resolver.findOne(null, 'user@br.dev');
    const profile = user.profile;
    delete user.profile;
    const deletedUser = await resolver.removeUser(user.id);
    expect(deletedUser).toStrictEqual([profile, user]);
  });

  afterEach(async () => {
    if (module) {
      // close database connections
      await module.close();
    }
  });
});
