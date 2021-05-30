import { JSONSchemaType } from 'ajv';
import { CategoryInterface } from '@src/interfaces/categories.interface';
import { imagesSchema } from './images.schema';

export const categoriesSchema: JSONSchemaType<CategoryInterface[]> = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      description: { type: 'string' },

      ImageModels: imagesSchema,

      SectionId: { type: 'integer' },

      createdAt: { type: 'string' },
      updatedAt: { type: 'string' },
    },
    required: ['id', 'name', 'description', 'SectionId', 'createdAt', 'ImageModels', 'updatedAt'],
    additionalProperties: false,
  },
};
