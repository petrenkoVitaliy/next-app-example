export const API_ROUTES = {
  SECTIONS: '/sections',
  CATEGORIES: '/categories',
  ITEMS: (categoryName: string) => `/items/${categoryName}`,
};
