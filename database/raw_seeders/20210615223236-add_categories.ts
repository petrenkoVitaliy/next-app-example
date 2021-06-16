'use strict';

import { QueryInterface } from 'sequelize/types';

export interface CategoryAttributes {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  SectionId: number;
}

const categoriesMap: {
  sectionId: number;
  categories: { id: number; name: string; description: string }[];
}[] = [
  {
    sectionId: 1,
    categories: [
      {
        id: 1,
        name: 'category_1',
        description: 'category_1 description',
      },
      {
        id: 2,
        name: 'category_2',
        description: 'category_2 description',
      },
      {
        id: 3,
        name: 'category_3',
        description: 'category_3 description',
      },
      {
        id: 4,
        name: 'category_4',
        description: 'category_4 description',
      },
    ],
  },
  {
    sectionId: 2,
    categories: [
      {
        id: 5,
        name: 'category_2',
        description: 'category_2 description',
      },
      {
        id: 6,
        name: 'category_3',
        description: 'category_3 description',
      },
      {
        id: 7,
        name: 'category_4',
        description: 'category_4 description',
      },
      {
        id: 8,
        name: 'category_5',
        description: 'category_5 description',
      },
      {
        id: 9,
        name: 'category_6',
        description: 'category_6 description',
      },
      {
        id: 10,
        name: 'category_7',
        description: 'category_7 description',
      },
      {
        id: 11,
        name: 'category_8',
        description: 'category_8 description',
      },
    ],
  },
];

const addDates = (category: {
  id: number;
  name: string;
  description: string;
  SectionId: number;
}) => ({
  ...category,
  createdAt: new Date(),
  updatedAt: new Date(),
});

const getCategories = (): CategoryAttributes[] => {
  const categories: CategoryAttributes[] = [];

  categoriesMap.forEach((section) => {
    section.categories.forEach((category) => {
      categories.push(addDates({ ...category, SectionId: section.sectionId }));
    });
  });

  return categories;
};

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const categories = getCategories();

    await queryInterface.bulkInsert('categories', categories);
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('categories', {});
  },
};
