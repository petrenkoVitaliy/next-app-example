import { DataTypes, Model } from 'sequelize';
import { CategoryModel } from './category';
import { getSequelizeConnection } from './index';

const sequelize = getSequelizeConnection();

export interface ItemAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

class ItemModel extends Model implements ItemAttributes {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ItemModel.init(
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
  },
  {
    tableName: 'Items',
    sequelize: sequelize,
    timestamps: true,
  },
);

ItemModel.belongsTo(CategoryModel, { foreignKey: 'CategoryId' });

export { ItemModel };
