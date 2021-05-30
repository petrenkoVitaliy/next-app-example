import { CategoryAttributes } from 'models/category';
import { ImageInterface } from './images.interface';

export type CategoryInterface = CategoryAttributes & { ImageModels: ImageInterface[] };
