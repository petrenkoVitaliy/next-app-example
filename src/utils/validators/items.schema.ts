import { JSONSchemaType } from 'ajv';
import { ItemInterface } from '@src/interfaces/items.interface';
import { imagesSchema } from './images.schema';

export const itemSchema: JSONSchemaType<ItemInterface | null> = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
    description: { type: 'string' },
    price: { type: 'integer' },

    CategoryId: { type: 'integer' },

    ImageModels: imagesSchema,

    createdAt: { type: 'string' },
    updatedAt: { type: 'string' },
  },
  required: ['id', 'name', 'description', 'CategoryId', 'createdAt', 'updatedAt', 'ImageModels'],
  additionalProperties: false,
};

export const itemsSchema: JSONSchemaType<ItemInterface[]> = {
  type: 'array',
  items: {
    ...itemSchema,
  },
};
