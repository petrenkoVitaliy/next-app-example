import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonReducer } from '@src/interfaces/reducer.interface';
import { WindowSize } from '@src/interfaces/windowSize.interface';

const initialState: CommonReducer = { message: '', windowSize: null };

const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    updateMessage: (state, action: PayloadAction<{ message: string }>) => {
      state.message = action.payload.message;
    },
    updateWindowSize: (state, action: PayloadAction<{ windowSize: WindowSize | null }>) => {
      state.windowSize = action.payload.windowSize;
    },
  },
});

const { actions, reducer } = commonSlice;

export { actions, reducer };
