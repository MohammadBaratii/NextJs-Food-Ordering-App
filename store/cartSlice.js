import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.totalAmount++;
      state.totalPrice += action.payload.price * action.payload.amount;
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
