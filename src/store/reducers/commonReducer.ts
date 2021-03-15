// @reduxjs/toolkit'
import { CommonReducer } from 'interfaces/store/reducer';
import { Types } from 'store/types';

const CommonTypes = Types.CommonTypes;

const initialState: CommonReducer = { message: '' };

const commonReducer = (state = initialState, action: any): CommonReducer => {
  switch (action.type) {
    case CommonTypes.SET_MESSAGE:
      return { ...state, message: action.message };

    default:
      return { ...state };
  }
};

export default commonReducer;
