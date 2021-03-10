import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from './post.model';

@ObjectType()
export class Author {
  @Field(type => Int)
  id: number;
  name?: string;
  email?: string;
  /**
   * A Beautiful emoji
   */
  emoji?: string = '🐒';
  posts: Post[];
}