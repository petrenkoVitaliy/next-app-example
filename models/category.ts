import { DataTypes, Model, Sequelize } from 'sequelize';

import { ItemModel } from './item';
import { SectionModel } from './section';

import { ModelInstanceType, ModelInstanceStatic } from 'server/interfaces/model.interface';

export interface CategoryAttributes {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;

  SectionId: number;
}

export type CategoryModel = ModelInstanceType<
  CategoryAttributes,
  {
    SectionModel?: SectionModel;
    ItemModel?: ItemModel;
  }
>;

const modelDefiner = (sequelize: Sequelize) => {
  return <ModelInstanceStatic<CategoryModel>>sequelize.define<
    Model,
    Omit<CategoryAttributes, 'createdAt' | 'updatedAt'>
  >(
    'CategoryModel',
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

      SectionId: {
        type: DataTypes.NUMBER,
        references: {
          model: 'SectionModel',
          key: 'id',
        },
      },
    },
    {
      tableName: 'categories',
      timestamps: true,
    },
  );
};

const modelAssociationsDefiner = (sequelize: Sequelize) => {
  const { SectionModel, CategoryModel, ItemModel, ImageModel } = sequelize.models;

  CategoryModel.belongsTo(SectionModel, { foreignKey: 'SectionId' });
  CategoryModel.hasMany(ItemModel, { foreignKey: 'CategoryId' });
  CategoryModel.hasMany(ImageModel, { foreignKey: 'CategoryId' });
};

export default { modelAssociationsDefiner, modelDefiner };
