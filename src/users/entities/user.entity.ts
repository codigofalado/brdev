import {
  ObjectType,
  Field,
  Int,
  GraphQLISODateTime,
  registerEnumType,
} from '@nestjs/graphql';

import { Profile } from './profile.entity';

// When changing the Roles, please also add the new values
// to the shema.prisma file

export enum Role {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
}

registerEnumType(Role, {
  name: 'Role',
});

@ObjectType()
export class User {
  @Field()
  id: string;
  @Field()
  username: string;
  @Field()
  email: string;
  @Field({ nullable: true })
  name?: string;
  @Field()
  password: string;
  @Field(() => GraphQLISODateTime)
  createdAt: string;
  @Field(() => GraphQLISODateTime)
  lastLogin?: string;
  @Field(() => Role, { description: 'User, Moderator or Admin' })
  role: Role;
  @Field(() => Profile, { description: 'User Profile' })
  profile: Profile;
}
