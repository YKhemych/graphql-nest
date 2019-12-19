import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArticleService } from '../services/article.service';
import { ArticleType } from '../dto/article.dto';
import { ArticleInput } from '../inputs/input-article.input';

@Resolver('Article')
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Query(() => [ArticleType])
  async articles(): Promise<ArticleType[]> {
    return this.articleService.findAll();
  }

  @Mutation(() => ArticleType)
  async createArticle(@Args('input') input: ArticleInput): Promise<ArticleType> {
    return this.articleService.create(input);
  }
}
