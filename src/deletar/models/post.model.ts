import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(type => ID)
  id: number;
  title: string;
  /**
   * The Votes!
   */
  votes?: number;
}