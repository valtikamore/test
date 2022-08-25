import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'bll/store';

interface IPriceState {
  amount: number | null;
}

const initialState: IPriceState = {
  amount: null,
};

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    updateAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { updateAmount } = amountSlice.actions;
export const selectAmount = (state: RootState): number | null =>
  state.amount.amount;

export default amountSlice.reducer;
