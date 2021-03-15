import { createSelector } from 'reselect';
import { CommonReducer, RootReducer } from 'interfaces/store/reducer';

const rootCommonSelector = (state: RootReducer): CommonReducer => state.common;

export const getMessage = () =>
  createSelector(rootCommonSelector, (commonState) => commonState.message);
