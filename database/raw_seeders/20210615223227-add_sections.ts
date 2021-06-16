'use strict';

import { QueryInterface } from 'sequelize/types';

export interface SectionAttributes {
  id: number;
  name: string;

  createdAt: Date;
  updatedAt: Date;
}

const sections: { id: number; name: string }[] = [
  {
    id: 1,
    name: 'section_1',
  },
  {
    id: 2,
    name: 'section_2',
  },
];

const addDates = <T>(data: T): T & { createdAt: Date; updatedAt: Date } => ({
  ...data,
  createdAt: new Date(),
  updatedAt: new Date(),
});
module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('sections', sections.map(addDates));
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('sections', {});
  },
};
