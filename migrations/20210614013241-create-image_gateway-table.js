'use strict';

const ImageType = {
  category: 'category',
  section: 'section',
  item: 'item',
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('image_gateway', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      reference_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image_type: {
        type: Sequelize.ENUM(...Object.values(ImageType)),
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('image_gateway');
  },
};
