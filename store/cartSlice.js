import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    amount: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.amount++;
      state.total += action.payload.price * action.payload.amount;
    },
    reset: (state) => {
      state = {
        products: [],
        amount: 0,
        total: 0,
      };
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
