export const getThunkPrefix = (storeName: string) => {
  return (thunkName: string) => `@thunk/${storeName}/${thunkName}`;
};
