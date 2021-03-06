import { SectionAttributes } from 'database/models/section';
import { CategoryInterface } from './categories.interface';
import { ImageInterface } from './images.interface';

export type SectionInterface = SectionAttributes & {
  CategoryModels: CategoryInterface[];
  ImageModels: ImageInterface[];
};
