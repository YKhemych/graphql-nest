import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './modules/items.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './modules/article.module';
import { ArticleService } from './services/article.service';
import { ArticleResolver } from './resolvers/article.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [ItemsModule, ArticleModule],
      autoSchemaFile: 'schema.gql',
    }),
    ItemsModule,
    MongooseModule.forRoot('mongodb://root:root@localhost:27017/admin', {useNewUrlParser: true, useUnifiedTopology: true }),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
