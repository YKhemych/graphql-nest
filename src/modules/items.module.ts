import { Module } from '@nestjs/common';
import { ItemsService } from '../services/items.service';
import { ItemsResolver } from '../resolvers/items.resolver';
import { ItemSchema } from '../schemas/item.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  providers: [ItemsService, ItemsResolver],
})
export class ItemsModule {}
