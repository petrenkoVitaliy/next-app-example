import { JSONSchemaType } from 'ajv';
import { ItemContentInterface } from '@src/interfaces/itemContent.interface';
import { ItemContentType } from '@server/constants/item';

export const itemContentSchema: JSONSchemaType<ItemContentInterface> = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    key: { type: 'string' },
    value: { type: 'string' },
    content_type: { type: 'string', enum: [ItemContentType.named, ItemContentType.single] },

    ItemId: { type: 'integer' },

    createdAt: { type: 'string' },
    updatedAt: { type: 'string' },
  },
  required: ['id', 'key', 'value', 'ItemId', 'createdAt', 'updatedAt'],
  additionalProperties: false,
};

export const itemContentsSchema: JSONSchemaType<ItemContentInterface[]> = {
  type: 'array',
  items: {
    ...itemContentSchema,
  },
};
