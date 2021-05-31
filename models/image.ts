import { DataTypes, Model, Sequelize } from 'sequelize';

import { CategoryModel } from './category';
import { ItemModel } from './item';
import { SectionModel } from './section';

import { ModelInstanceStatic, ModelInstanceType } from '@server/interfaces/model.interface';

export interface ImageAttributes {
  id: number;
  name: string;
  url: string;

  CategoryId?: number;
  ItemId?: number;
  SectionId?: number;

  createdAt: string;
  updatedAt: string;
}

export type ImageModel = ModelInstanceType<
  ImageAttributes,
  {
    CategoryModel: CategoryModel;
    ItemModel: ItemModel;
    SectionModel: SectionModel;
  }
>;

const modelDefiner = (sequelize: Sequelize) => {
  return <ModelInstanceStatic<ImageModel>>sequelize.define<
    Model,
    Omit<ImageAttributes, 'createdAt' | 'updatedAt'>
  >(
    'ImageModel',
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
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      CategoryId: {
        type: DataTypes.NUMBER,
        references: {
          model: 'CategoryModel',
          key: 'id',
        },
      },
      ItemId: {
        type: DataTypes.NUMBER,
        references: {
          model: 'ItemModel',
          key: 'id',
        },
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
      tableName: 'images',
      timestamps: true,
    },
  );
};

const modelAssociationsDefiner = (sequelize: Sequelize) => {
  const { ItemModel, CategoryModel, ImageModel, SectionModel } = sequelize.models;

  ImageModel.belongsTo(CategoryModel, { foreignKey: 'CategoryId' });
  ImageModel.belongsTo(ItemModel, { foreignKey: 'ItemId' });
  ImageModel.belongsTo(SectionModel, { foreignKey: 'SectionId' });
};

export default { modelAssociationsDefiner, modelDefiner };
