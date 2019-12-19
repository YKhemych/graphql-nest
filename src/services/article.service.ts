import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from '../interfaces/article.interface';
import { ArticleInput } from '../inputs/input-article.input';
import { ArticleType } from '../dto/article.dto';

@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private articleModel: Model<Article>) {}

  async create(createArticleDto: ArticleInput): Promise<ArticleType> {
    const createdArticle = new this.articleModel(createArticleDto);
    return await createdArticle.save();
  }

  async findAll(): Promise<ArticleType[]> {
    return await this.articleModel.find().exec();
  }
}
