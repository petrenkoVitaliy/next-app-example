import { JSONSchemaType } from 'ajv';
import { SectionInterface } from '@src/interfaces/sections.interface';
import { categoriesSchema } from './categories.schema';

export const sectionsSchema: JSONSchemaType<SectionInterface[]> = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      createdAt: { type: 'string' },
      updatedAt: { type: 'string' },

      CategoryModels: categoriesSchema,
    },
    additionalProperties: false,
    required: ['id', 'name', 'createdAt', 'updatedAt'],
  },
};
