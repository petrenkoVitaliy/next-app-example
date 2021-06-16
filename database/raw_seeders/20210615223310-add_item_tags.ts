import { QueryInterface } from 'sequelize/types';

interface ItemTagAttributes {
  ItemId: number;

  key: string;
  value: string;

  createdAt: Date;
  updatedAt: Date;
}

const itemTagsMap: { ItemId: number; tags: { key: string; value: string }[] }[] = [
  {
    ItemId: 1,
    tags: [
      {
        key: 'model',
        value: 'best model ever',
      },
      {
        key: 'weight',
        value: '100 kg',
      },
      {
        key: 'color',
        value: 'red',
      },
      {
        key: 'format',
        value: 'full',
      },
      {
        key: 'material',
        value: 'soft',
      },
    ],
  },
  {
    ItemId: 2,
    tags: [
      {
        key: 'model',
        value: 'best model ever',
      },
      {
        key: 'weight',
        value: '100 kg',
      },
      {
        key: 'color',
        value: 'red',
      },
      {
        key: 'format',
        value: 'full',
      },
      {
        key: 'material',
        value: 'soft',
      },
    ],
  },
];

const addDates = <T>(data: T): T & { createdAt: Date; updatedAt: Date } => ({
  ...data,
  createdAt: new Date(),
  updatedAt: new Date(),
});

const getItemTags = (): ItemTagAttributes[] => {
  const itemTags: ItemTagAttributes[] = [];

  itemTagsMap.forEach(({ ItemId, tags }) => {
    tags.forEach((tag) => {
      itemTags.push(addDates({ ItemId, ...tag }));
    });
  });

  return itemTags;
};

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const itemTags = getItemTags();

    await queryInterface.bulkInsert('item_tags', itemTags);
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('item_tags', {});
  },
};
