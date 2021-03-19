import { DataTypes, Model } from 'sequelize';
import { getSequelizeConnection } from './index';

const sequelize = getSequelizeConnection();

export interface CategoryAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

class CategoryModel extends Model implements CategoryAttributes {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // public static associations: {};
}

CategoryModel.init(
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
    tableName: 'Categories',
    sequelize: sequelize,
    timestamps: true,
  },
);

export { CategoryModel };
