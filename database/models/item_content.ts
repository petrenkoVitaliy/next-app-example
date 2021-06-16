import { DataTypes, Model, Sequelize } from 'sequelize';

import { ModelInstanceStatic, ModelInstanceType } from '@server/interfaces/model.interface';
import { ItemContentType } from '@server/constants/item';

export interface ItemContentAttributes {
  id: number;
  ItemId: number;

  key: string;
  value: string;
  content_type: ItemContentType;

  createdAt: string;
  updatedAt: string;
}

export type ItemContentModel = ModelInstanceType<ItemContentAttributes>;

const contentTypes = [ItemContentType.single, ItemContentType.named];

const modelDefiner = (sequelize: Sequelize) => {
  return <ModelInstanceStatic<ItemContentModel>>sequelize.define<
    Model,
    Omit<ItemContentAttributes, 'createdAt' | 'updatedAt'>
  >(
    'ItemContentModel',
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
      content_type: {
        type: DataTypes.ENUM(...contentTypes),
        allowNull: false,
      },
      key: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'item_content',
      timestamps: true,
    },
  );
};

const modelAssociationsDefiner = (sequelize: Sequelize) => {
  const { ItemContentModel, ItemModel } = sequelize.models;

  ItemContentModel.belongsTo(ItemModel, { foreignKey: 'ItemId' });
};

export default { modelAssociationsDefiner, modelDefiner };
