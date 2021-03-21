import { DataTypes, Sequelize } from 'sequelize';

import { ItemModel } from './item';
import { SectionModel } from './section';

import { ModelInstanceType, ModelInstanceStatic } from 'server/interfaces/model.interface';

export interface CategoryAttributes {
  id: number;
  name: string;
  description: string;
  image_url: string;
  createdAt: Date;
  updatedAt: Date;

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
  return <ModelInstanceStatic<CategoryModel>>sequelize.define(
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
      image_url: {
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
  const { SectionModel, CategoryModel, ItemModel } = sequelize.models;

  CategoryModel.belongsTo(SectionModel, { foreignKey: 'SectionId' });
  CategoryModel.hasMany(ItemModel, { foreignKey: 'CategoryId' });
};

export default { modelAssociationsDefiner, modelDefiner };
