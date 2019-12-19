import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from '../schemas/article.schema';
import { ArticleResolver } from '../resolvers/article.resolver';
import { ArticleService } from '../services/article.service';

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }])],
  providers: [ ArticleService, ArticleResolver ],
})
export class ArticleModule {
}
