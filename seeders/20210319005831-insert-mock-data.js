'use strict';
/**
 * This file will be rewritten, just for test now
 */

const images = [
  {
    id: 1,
    name: 'dril1',
    url: 'https://storage.googleapis.com/next-storage-images/items/dril1.png',
  },
  {
    id: 2,
    name: 'dril2',
    url: 'https://storage.googleapis.com/next-storage-images/items/dril2.png',
  },
  {
    id: 3,
    name: 'dril3',
    url: 'https://storage.googleapis.com/next-storage-images/items/dril3.jpg',
  },
  {
    id: 4,
    name: 'dril4',
    url: 'https://storage.googleapis.com/next-storage-images/items/dril4.jpeg',
  },
  {
    id: 5,
    name: 'dril5',
    url: 'https://storage.googleapis.com/next-storage-images/items/dril5.png',
  },
  {
    id: 6,
    name: 'dril6',
    url: 'https://storage.googleapis.com/next-storage-images/items/dril6.jpg',
  },
];

const sectionsMap = [
  {
    name: 'section_1',

    categories: [
      {
        name: 'category_1',
        description: 'category_1 description',
        imageIds: [2, 3, 4],

        items: [
          {
            name: 'item_1',
            description: 'item_1 description',
            price: 100,
            imageIds: [1, 5, 6],
          },
          {
            name: 'item_2',
            description: 'item_2 description',
            price: 200,
          },
          {
            name: 'item_21',
            description: 'item_21 description',
            price: 300,
          },
          {
            name: 'item_22',
            description: 'item_22 description',
            price: 400,
          },
          {
            name: 'item_3',
            description: 'item_3 description',
            price: 300,
          },
        ],
      },
      {
        imageIds: [3, 4],
        name: 'category_2',
        description: 'category_2 description',
        items: [],
      },
      {
        name: 'category_3',
        description: 'category_3 description',
        items: [],
      },
      {
        name: 'category_4',
        description: 'category_4 description',
        items: [],
      },
    ],
  },
  {
    name: 'section_2',
    categories: [
      {
        name: 'category_2',
        description: 'category_2 description',
        items: [
          {
            name: 'item_4',
            description: 'item_4 description',
            price: 400,
          },
          {
            name: 'item_2',
            description: 'item_5 description',
            price: 500,
          },
          {
            name: 'item_6',
            description: 'item_6 description',
            price: 600,
          },
        ],
      },
      {
        name: 'category_3',
        description: 'category_3 description',
        items: [
          {
            name: 'item_7',
            description: 'item_7 description',
            price: 700,
          },
          {
            name: 'item_8',
            description: 'item_8 description',
            price: 800,
          },
          {
            name: 'item_9',
            description: 'item_9 description',
            price: 900,
          },
        ],
      },
      {
        name: 'category_4',
        description: 'category_4 description',
        items: [],
      },
      {
        name: 'category_5',
        description: 'category_5 description',
        items: [],
      },
      {
        name: 'category_6',
        description: 'category_6 description',
        items: [],
      },
      {
        name: 'category_7',
        description: 'category_7 description',
        items: [],
      },
      {
        name: 'category_8',
        description: 'category_8 description',
        items: [],
      },
    ],
  },
];

const saveImage = async (
  queryInterface,
  { CategoryId = null, ItemId = null, SectionId = null },
  ids = [],
) => {
  const foundImages = images.filter((image) => ids.includes(image.id));

  let image_type = '';
  if (CategoryId) {
    image_type = 'category';
  }
  if (ItemId) {
    image_type = 'item';
  }
  if (SectionId) {
    image_type = 'section';
  }

  const gatewayFields = {
    reference_id: CategoryId || ItemId || SectionId,
    image_type,
  };

  let imageGatewayId = await queryInterface.rawSelect(
    'image_gateway',
    {
      where: gatewayFields,
    },
    ['id'],
  );

  if (!imageGatewayId) {
    await queryInterface.bulkInsert('image_gateway', [
      { ...gatewayFields, createdAt: new Date(), updatedAt: new Date() },
    ]);
    imageGatewayId = await queryInterface.rawSelect(
      'image_gateway',
      {
        where: gatewayFields,
      },
      ['id'],
    );
  }

  return Promise.all([
    foundImages.length
      ? queryInterface.bulkInsert(
          'images',
          foundImages.map((image) => ({
            name: image.name,
            url: image.url,

            ImageGatewayId: imageGatewayId,

            createdAt: new Date(),
            updatedAt: new Date(),
          })),
        )
      : null,
  ]);
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'sections',
      {},
      {},
      { primaryKeys: [], primaryKeyAttributes: [] },
    );

    for (let section of sectionsMap) {
      await queryInterface.bulkInsert('sections', [
        { name: section.name, createdAt: new Date(), updatedAt: new Date() },
      ]);

      const savedSectionId = await queryInterface.rawSelect(
        'sections',
        {
          where: {
            name: section.name,
          },
        },
        ['id'],
      );

      if (section.imageIds) {
        await saveImage(queryInterface, { SectionId: savedSectionId }, section.imageIds);
      }

      for (let category of section.categories) {
        await queryInterface.bulkInsert('categories', [
          {
            name: category.name,
            description: category.description,
            createdAt: new Date(),
            updatedAt: new Date(),
            SectionId: savedSectionId,
          },
        ]);

        const savedCategoryId = await queryInterface.rawSelect(
          'categories',
          {
            where: {
              name: category.name,
            },
          },
          ['id'],
        );

        if (category.imageIds) {
          await saveImage(queryInterface, { CategoryId: savedCategoryId }, category.imageIds);
        }

        for (let item of category.items) {
          await queryInterface.bulkInsert('items', [
            {
              name: item.name,
              description: item.description,
              price: item.price,
              createdAt: new Date(),
              updatedAt: new Date(),

              CategoryId: savedCategoryId,
            },
          ]);

          const savedItemId = await queryInterface.rawSelect(
            'items',
            {
              where: {
                name: item.name,
              },
            },
            ['id'],
          );

          if (item.imageIds) {
            await saveImage(queryInterface, { ItemId: savedItemId }, item.imageIds);
          }
        }
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
