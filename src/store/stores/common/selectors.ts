import { createSelector } from 'reselect';
import { CommonReducer, RootReducer } from '@src/interfaces/reducer.interface';

const rootCommonSelector = (state: RootReducer): CommonReducer => state.common;

export const getMessage = () =>
  createSelector(rootCommonSelector, (commonState) => commonState.message);

export const getWindowSize = () =>
  createSelector(rootCommonSelector, (commonState) => commonState.windowSize);
