import { Document } from 'mongoose';
import { Item } from './item.interface';
export interface Article extends Document {
  readonly title: string;
  readonly message: string;
  readonly items: [Item];
}
