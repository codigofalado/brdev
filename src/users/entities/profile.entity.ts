import {
  ObjectType,
  Field,
  Int,
  GraphQLISODateTime,
  registerEnumType,
} from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field()
  userId: string;
  @Field()
  avatar?: string;
  @Field()
  about?: string;
}
