import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class ItemType {
  @Field((type) => ID)
  readonly id: string;
  @Field()
  readonly title: string;
  @Field((type) => Number)
  readonly price: number;
  @Field()
  readonly description: string;
}
