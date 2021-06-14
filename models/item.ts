import { DataTypes, Model, Sequelize } from 'sequelize';

import { CategoryModel } from './category';

import { ModelInstanceStatic, ModelInstanceType } from '@server/interfaces/model.interface';
import { ImageType } from '@server/constants/image';

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
  const { ItemModel, CategoryModel, ImageGatewayModel, ImageModel } = sequelize.models;

  ItemModel.belongsTo(CategoryModel, { foreignKey: 'CategoryId' });
  ItemModel.belongsToMany(ImageModel, {
    through: {
      model: ImageGatewayModel,
      unique: false,
      scope: {
        image_type: ImageType.item,
      },
    },
    targetKey: 'ImageGatewayId',
    foreignKey: 'reference_id',
    otherKey: 'id',
    constraints: false,
  });
};

export default { modelAssociationsDefiner, modelDefiner };
