import { InputType, Int, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { Role } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field({ nullable: true })
  name?: string;
  @Field()
  password: string;
}
