import { ItemAttributes } from 'models/item';
import { ImageInterface } from './images.interface';

export type ItemInterface = ItemAttributes & { ImageModels: ImageInterface[] };
