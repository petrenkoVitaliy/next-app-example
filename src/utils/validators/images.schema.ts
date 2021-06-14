import { JSONSchemaType } from 'ajv';
import { ImageInterface } from '@src/interfaces/images.interface';

export const imagesSchema: JSONSchemaType<ImageInterface[]> = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      url: { type: 'string' },

      ImageGatewayId: { type: 'integer', nullable: false },

      createdAt: { type: 'string' },
      updatedAt: { type: 'string' },
    },
    additionalProperties: false,
    required: ['id', 'name', 'createdAt', 'url', 'updatedAt'],
  },
};
