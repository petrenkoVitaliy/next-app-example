import { DataTypes, Sequelize } from 'sequelize';

import { CategoryModel } from './category';

import { ModelInstanceStatic, ModelInstanceType } from '@server/interfaces/model.interface';

export interface ItemAttributes {
  id: number;
  name: string;
  description: string;
  image_url: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;

  CategoryId: number;
}

export type ItemModel = ModelInstanceType<
  ItemAttributes,
  {
    CategoryModel?: CategoryModel;
  }
>;

const modelDefiner = (sequelize: Sequelize) => {
  return <ModelInstanceStatic<ItemModel>>sequelize.define(
    'ItemModel',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },

      CategoryId: {
        type: DataTypes.NUMBER,
        references: {
          model: 'CategoryModel',
          key: 'id',
        },
      },
    },
    {
      tableName: 'items',
      timestamps: true,
    },
  );
};

const modelAssociationsDefiner = (sequelize: Sequelize) => {
  const { ItemModel, CategoryModel } = sequelize.models;

  ItemModel.belongsTo(CategoryModel, { foreignKey: 'CategoryId' });
};

export default { modelAssociationsDefiner, modelDefiner };
