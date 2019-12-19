import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from '../services/items.service';
import { ItemType } from '../dto/item.dto';
import { ItemInput } from '../inputs/input-items.input';

@Resolver()
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => ItemType)
  async item(
    @Args('id') id: string,
    // @Args('title') title: string,
    // @Args('price') price: number,
    // @Args('description') description: string,
    ): Promise<ItemType> {
    return this.itemsService.findOne(id);
  }

  @Query(() => [ItemType])
  async items(): Promise<ItemType[]> {
    return this.itemsService.findAll();
  }

  @Mutation(() => ItemType)
  async createItem(@Args('input') input: ItemInput): Promise<ItemInput> {
    return this.itemsService.create(input);
  }

  @Mutation(() => ItemType)
  async updateItem(
    @Args('id') id: string,
    @Args('input') input: ItemInput,
  ): Promise<ItemInput> {
    return this.itemsService.update(id, input);
  }

  @Mutation(() => ItemType)
  async deleteItem(@Args('id') id: string): Promise<ItemInput> {
    return this.itemsService.delete(id);
  }

  @Query(() => String)
  async hello() {
    return 'Hello friend';
  }
}
