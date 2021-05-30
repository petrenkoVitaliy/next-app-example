'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('images', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      CategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: true,
      },
      ItemId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'items',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: true,
      },
      SectionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sections',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: true,
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
    await queryInterface.dropTable('images');
  },
};
