'use strict';

const sectionsMap = [
  {
    name: 'section_1',
    categories: [
      {
        name: 'category_1',
        description: 'category_1 description',
        image_url:
          'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
        items: [
          {
            name: 'item_1',
            description: 'item_1 description',
            image_url:
              'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
            price: 100,
          },
          {
            name: 'item_2',
            description: 'item_2 description',
            image_url: 'http://mobileimages.lowes.com/product/converted/885911/885911548953.jpg',
            price: 200,
          },
          {
            name: 'item_21',
            description: 'item_21 description',
            image_url: 'http://mobileimages.lowes.com/product/converted/885911/885911548953.jpg',
            price: 300,
          },
          {
            name: 'item_22',
            description: 'item_22 description',
            image_url: 'http://mobileimages.lowes.com/product/converted/885911/885911548953.jpg',
            price: 400,
          },
          {
            name: 'item_3',
            description: 'item_3 description',
            image_url:
              'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
            price: 300,
          },
        ],
      },
      {
        name: 'category_2',
        description: 'category_2 description',
        image_url:
          'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
        items: [],
      },
      {
        name: 'category_3',
        description: 'category_3 description',
        image_url:
          'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
        items: [],
      },
      {
        name: 'category_4',
        description: 'category_4 description',
        image_url:
          'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
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
        image_url:
          'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
        items: [
          {
            name: 'item_4',
            description: 'item_4 description',
            image_url: 'http://mobileimages.lowes.com/product/converted/885911/885911548953.jpg',
            price: 400,
          },
          {
            name: 'item_2',
            description: 'item_5 description',
            image_url:
              'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
            price: 500,
          },
          {
            name: 'item_6',
            description: 'item_6 description',
            image_url: 'http://mobileimages.lowes.com/product/converted/885911/885911548953.jpg',
            price: 600,
          },
        ],
      },
      {
        name: 'category_3',
        description: 'category_3 description',
        image_url:
          'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
        items: [
          {
            name: 'item_7',
            description: 'item_7 description',
            image_url: 'http://mobileimages.lowes.com/product/converted/885911/885911548953.jpg',
            price: 700,
          },
          {
            name: 'item_8',
            description: 'item_8 description',
            image_url:
              'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
            price: 800,
          },
          {
            name: 'item_9',
            description: 'item_9 description',
            image_url: 'http://mobileimages.lowes.com/product/converted/885911/885911548953.jpg',
            price: 900,
          },
        ],
      },
      {
        name: 'category_4',
        description: 'category_4 description',
        image_url:
          'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
        items: [],
      },
      {
        name: 'category_5',
        description: 'category_5 description',
        image_url:
          'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
        items: [],
      },
      {
        name: 'category_6',
        description: 'category_6 description',
        image_url:
          'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
        items: [],
      },
      {
        name: 'category_7',
        description: 'category_7 description',
        image_url:
          'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
        items: [],
      },
      {
        name: 'category_8',
        description: 'category_8 description',
        image_url:
          'https://media.qcsupply.com/media/catalog/product/cache/5284d6cde28d5b60f464df18bb1a18f4/3/5/350049.jpg',
        items: [],
      },
    ],
  },
];

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

      for (let category of section.categories) {
        await queryInterface.bulkInsert('categories', [
          {
            name: category.name,
            description: category.description,
            image_url: category.image_url,
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

        for (let item of category.items) {
          await queryInterface.bulkInsert('items', [
            {
              name: item.name,
              description: item.description,
              image_url: item.image_url,
              price: item.price,
              createdAt: new Date(),
              updatedAt: new Date(),

              CategoryId: savedCategoryId,
            },
          ]);
        }
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
