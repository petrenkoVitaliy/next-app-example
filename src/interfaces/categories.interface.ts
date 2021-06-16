import { CategoryAttributes } from 'database/models/category';
import { ImageInterface } from './images.interface';

export type CategoryInterface = CategoryAttributes & { ImageModels: ImageInterface[] };
