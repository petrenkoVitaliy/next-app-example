import { JSONSchemaType } from 'ajv';
import { CategoryInterface } from '@src/interfaces/categories.interface';

export const categoriesSchema: JSONSchemaType<CategoryInterface[]> = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      description: { type: 'string' },
      image_url: { type: 'string' },

      SectionId: { type: 'integer' },

      createdAt: { type: 'string' },
      updatedAt: { type: 'string' },
    },
    required: ['id', 'name', 'description', 'image_url', 'SectionId', 'createdAt', 'updatedAt'],
    additionalProperties: false,
  },
};
