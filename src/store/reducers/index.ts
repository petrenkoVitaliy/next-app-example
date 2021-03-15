import { RootReducer } from 'interfaces/store/reducer';
import { combineReducers } from 'redux';

import commonReducer from './commonReducer';

const rootReducer = combineReducers<RootReducer>({
  common: commonReducer,
});

export default rootReducer;
