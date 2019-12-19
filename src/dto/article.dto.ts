import { Field, ID, ObjectType } from 'type-graphql';
import { ItemType } from './item.dto';

@ObjectType()
export class ArticleType {
  @Field((type) => ID)
  readonly id: string;
  @Field()
  readonly title: string;
  @Field()
  readonly message: string;
  @Field(() => [ItemType])
  readonly items: [ItemType];
}
