import { DataTypes, Model, Sequelize } from 'sequelize';

import { ItemModel } from './item';
import { SectionModel } from './section';

import { ModelInstanceType, ModelInstanceStatic } from 'server/interfaces/model.interface';
import { ImageType } from '@server/constants/image';

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
  const { SectionModel, CategoryModel, ItemModel, ImageGatewayModel, ImageModel } =
    sequelize.models;

  CategoryModel.belongsTo(SectionModel, { foreignKey: 'SectionId' });
  CategoryModel.hasMany(ItemModel, { foreignKey: 'CategoryId' });
  CategoryModel.belongsToMany(ImageModel, {
    through: {
      model: ImageGatewayModel,
      unique: false,
      scope: {
        image_type: ImageType.category,
      },
    },
    targetKey: 'ImageGatewayId',
    foreignKey: 'reference_id',
    otherKey: 'id',
    constraints: false,
  });
};

export default { modelAssociationsDefiner, modelDefiner };
