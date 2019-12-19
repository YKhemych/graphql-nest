import { InputType, Field, Int } from 'type-graphql';
import { ItemInput } from './input-items.input';

@InputType()
export class ArticleInput {
  @Field()
  readonly title: string;
  @Field()
  readonly message: string;
  @Field(() => ItemInput)
  readonly items: [ItemInput];
}
