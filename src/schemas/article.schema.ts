import { Schema } from 'mongoose';
import { ItemSchema } from './item.schema';

export const ArticleSchema = new Schema({
  title: String,
  message: String,
  items: [ItemSchema],
});
