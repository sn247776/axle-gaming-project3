import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface GlobalState {
  value: boolean;
}

const initialState: GlobalState = {
  value: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    authValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { authValue } = globalSlice.actions;
export const isAuth = (state: RootState) => state.global.value;

export default globalSlice.reducer;
