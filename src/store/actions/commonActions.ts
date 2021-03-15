import { RootReducer } from 'interfaces/store/reducer';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Types } from 'store/types';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootReducer,
  unknown,
  Action<string>
>;

export const setMessage = (): AppThunk => async (dispatch) => {
  return dispatch({
    type: Types.CommonTypes.SET_MESSAGE,
    message: new Date().toString(),
  });
};
