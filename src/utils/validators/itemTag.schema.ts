import { JSONSchemaType } from 'ajv';
import { ItemTagAttributes } from 'database/models/item_tag';

export const itemTagSchema: JSONSchemaType<ItemTagAttributes> = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    key: { type: 'string' },
    value: { type: 'string' },

    ItemId: { type: 'integer' },

    createdAt: { type: 'string' },
    updatedAt: { type: 'string' },
  },
  required: ['id', 'key', 'value', 'ItemId', 'createdAt', 'updatedAt'],
  additionalProperties: false,
};

export const itemTagsSchema: JSONSchemaType<ItemTagAttributes[]> = {
  type: 'array',
  items: {
    ...itemTagSchema,
  },
};
