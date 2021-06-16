import { QueryInterface } from 'sequelize/types';

export interface ItemAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;

  CategoryId: number;
}

const itemsMap: {
  CategoryId: number;
  items: {
    id: number;
    name: string;
    description: string;
    price: number;
  }[];
}[] = [
  {
    CategoryId: 1,
    items: [
      {
        id: 1,
        name: 'Item 1',
        description: 'description',
        price: 100,
      },
      {
        id: 2,
        name: 'Item 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet convallis augue, sed malesuada urna vehicula in. Suspendisse potenti. Nam eget lobortis ipsum.',
        price: 100,
      },
      {
        id: 3,
        name: 'Item 3',
        description:
          'Donec elementum massa mauris, eu efficitur odio porta quis. Quisque semper scelerisque augue sed malesuada. Praesent semper, felis eget vehicula semper, eros risus dignissim ante, sed rutrum augue purus at elit. Nunc sollicitudin imperdiet sapien facilisis convallis. Suspendisse commodo gravida luctus. Morbi placerat lorem et lectus ultricies, non iaculis quam euismod. Quisque elementum augue vel ex auctor, ut pretium diam dapibus.',
        price: 100,
      },
      {
        id: 4,
        name: 'Item 4',
        description: 'description',
        price: 100,
      },
      {
        id: 5,
        name: 'Item 5',
        description: 'description',
        price: 100,
      },
      {
        id: 6,
        name: 'Item 6',
        description: 'description',
        price: 100,
      },
      {
        id: 7,
        name: 'Item 7',
        description: 'description',
        price: 100,
      },
      {
        id: 8,
        name: 'Item 8',
        description: 'description',
        price: 100,
      },
      {
        id: 9,
        name: 'Item 9',
        description: 'description',
        price: 100,
      },
    ],
  },
  {
    CategoryId: 2,
    items: [
      {
        id: 10,
        name: 'Item 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet convallis augue, sed malesuada urna vehicula in. Suspendisse potenti. ',
        price: 100,
      },
      {
        id: 11,
        name: 'Item 2',
        description: 'description',
        price: 100,
      },
    ],
  },
];

const addDates = (
  category: Pick<ItemAttributes, 'CategoryId' | 'description' | 'id' | 'name' | 'price'>,
) => ({
  ...category,
  createdAt: new Date(),
  updatedAt: new Date(),
});

const getItems = (): ItemAttributes[] => {
  const items: ItemAttributes[] = [];

  itemsMap.forEach((category) => {
    category.items.forEach((item) => {
      items.push(addDates({ ...item, CategoryId: category.CategoryId }));
    });
  });

  return items;
};

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const items = getItems();

    await queryInterface.bulkInsert('items', items);
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('items', {});
  },
};
