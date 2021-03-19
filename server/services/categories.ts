import { CategoryModel } from 'models/category';

export const getAllCategories = async (): Promise<CategoryModel[]> => {
  const categories = await CategoryModel.findAll();

  return categories;
};
