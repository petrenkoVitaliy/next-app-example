import { DataTypes, Model, Sequelize } from 'sequelize';

import { CategoryModel } from './category';

import { ModelInstanceStatic, ModelInstanceType } from '@server/interfaces/model.interface';

export interface ItemAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;

  CategoryId: number;
}

export type ItemModel = ModelInstanceType<
  ItemAttributes,
  {
    CategoryModel: CategoryModel;
  }
>;

const modelDefiner = (sequelize: Sequelize) => {
  return <ModelInstanceStatic<ItemModel>>sequelize.define<
    Model,
    Omit<ItemAttributes, 'createdAt' | 'updatedAt'>
  >(
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
  const { ItemModel, CategoryModel, ImageModel } = sequelize.models;

  ItemModel.belongsTo(CategoryModel, { foreignKey: 'CategoryId' });
  ItemModel.hasMany(ImageModel, { foreignKey: 'ItemId' });
};

export default { modelAssociationsDefiner, modelDefiner };
