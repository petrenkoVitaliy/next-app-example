import { RootReducer } from '@src/interfaces/reducer.interface';
import { combineReducers } from 'redux';

import { reducer as common } from './stores/common';
import { reducer as sections } from './stores/sections';

const rootReducer = combineReducers<RootReducer>({
  common,
  sections,
});

export default rootReducer;
