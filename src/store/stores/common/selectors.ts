import { createSelector } from 'reselect';
import { CommonReducer, RootReducer } from '@src/interfaces/store/reducer.interface';

const rootCommonSelector = (state: RootReducer): CommonReducer => state.common;

export const getMessage = () =>
  createSelector(rootCommonSelector, (commonState) => commonState.message);
