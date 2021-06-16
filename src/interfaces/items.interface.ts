import { ItemAttributes } from 'database/models/item';
import { ItemContentAttributes } from 'database/models/item_content';
import { ImageInterface } from './images.interface';

export type ItemInterface = ItemAttributes & {
  ImageModels: ImageInterface[];
  ItemContentModels: ItemContentAttributes[];
};
