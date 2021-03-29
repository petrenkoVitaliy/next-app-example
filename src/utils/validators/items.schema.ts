import { JSONSchemaType } from 'ajv';
import { itemInterface } from '@src/interfaces/items.interface';

export const itemsSchema: JSONSchemaType<itemInterface[]> = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      description: { type: 'string' },
      image_url: { type: 'string' },
      price: { type: 'integer' },

      CategoryId: { type: 'integer' },

      createdAt: { type: 'string' },
      updatedAt: { type: 'string' },
    },
    required: ['id', 'name', 'description', 'image_url', 'CategoryId', 'createdAt', 'updatedAt'],
    additionalProperties: false,
  },
};
