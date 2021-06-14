import { DataTypes, Model, Sequelize } from 'sequelize';

import { CategoryModel } from './category';
import { ItemModel } from './item';
import { SectionModel } from './section';

import { ModelInstanceStatic, ModelInstanceType } from '@server/interfaces/model.interface';

export interface ImageAttributes {
  id: number;
  name: string;
  url: string;

  ImageGatewayId: number;

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

      ImageGatewayId: {
        type: DataTypes.NUMBER,
        references: {
          model: 'ImageGatewayModel',
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      tableName: 'images',
      timestamps: true,
    },
  );
};

const modelAssociationsDefiner = (sequelize: Sequelize) => {
  const { ImageModel, ImageGatewayModel } = sequelize.models;

  ImageModel.belongsTo(ImageGatewayModel, { foreignKey: 'ImageGatewayId' });
};

export default { modelAssociationsDefiner, modelDefiner };
