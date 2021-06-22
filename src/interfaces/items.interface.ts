import { ItemAttributes } from 'database/models/item';
import { ItemContentAttributes } from 'database/models/item_content';
import { ItemTagAttributes } from 'database/models/item_tag';
import { ImageInterface } from './images.interface';

export type ItemInterface = ItemAttributes & {
  ImageModels: ImageInterface[];
  ItemContentModels: ItemContentAttributes[];
  ItemTagModels: ItemTagAttributes[];
};
