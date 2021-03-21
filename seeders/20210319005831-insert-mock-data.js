'use strict';

const sectionsMap = [
  {
    name: 'section_1',
    categories: [
      {
        name: 'category_1',
        description: 'category_1 description',
        image_url:
          'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
        items: [
          {
            name: 'item_1',
            description: 'item_1 description',
            image_url:
              'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
            price: 100,
          },
          {
            name: 'item_2',
            description: 'item_2 description',
            image_url:
              'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
            price: 200,
          },
          {
            name: 'item_3',
            description: 'item_3 description',
            image_url:
              'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
            price: 300,
          },
        ],
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
          'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
        items: [
          {
            name: 'item_4',
            description: 'item_4 description',
            image_url:
              'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
            price: 400,
          },
          {
            name: 'item_2',
            description: 'item_5 description',
            image_url:
              'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
            price: 500,
          },
          {
            name: 'item_6',
            description: 'item_6 description',
            image_url:
              'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
            price: 600,
          },
        ],
      },
      {
        name: 'category_3',
        description: 'category_3 description',
        image_url:
          'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
        items: [
          {
            name: 'item_7',
            description: 'item_7 description',
            image_url:
              'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
            price: 700,
          },
          {
            name: 'item_8',
            description: 'item_8 description',
            image_url:
              'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
            price: 800,
          },
          {
            name: 'item_9',
            description: 'item_9 description',
            image_url:
              'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2017/10/11055507/mr-robot-safety-tips-featured.jpg',
            price: 900,
          },
        ],
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
