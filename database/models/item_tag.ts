import { DataTypes, Model, Sequelize } from 'sequelize';

import { ModelInstanceStatic, ModelInstanceType } from '@server/interfaces/model.interface';

export interface ItemTagAttributes {
  id: number;
  ItemId: number;

  key: string;
  value: string;

  createdAt: string;
  updatedAt: string;
}

export type ItemTagModel = ModelInstanceType<ItemTagAttributes>;

const modelDefiner = (sequelize: Sequelize) => {
  return <ModelInstanceStatic<ItemTagModel>>sequelize.define<
    Model,
    Omit<ItemTagAttributes, 'createdAt' | 'updatedAt'>
  >(
    'ItemTagModel',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ItemId: {
        type: DataTypes.NUMBER,
        references: {
          model: 'ItemModel',
          key: 'id',
        },
      },
      key: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'item_tags',
      timestamps: true,
    },
  );
};

const modelAssociationsDefiner = (sequelize: Sequelize) => {
  const { ItemTagModel, ItemModel } = sequelize.models;

  ItemTagModel.belongsTo(ItemModel, { foreignKey: 'ItemId' });
};

export default { modelAssociationsDefiner, modelDefiner };
