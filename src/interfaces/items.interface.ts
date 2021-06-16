import { ItemAttributes } from 'database/models/item';
import { ImageInterface } from './images.interface';

export type ItemInterface = ItemAttributes & { ImageModels: ImageInterface[] };
