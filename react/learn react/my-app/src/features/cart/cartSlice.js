import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfItems: 0,
  cartItems: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({ ...newItem, quantity: 1 });
        state.numberOfItems++;
      } else {
        existingItem.quantity++;
      }
      state.totalAmount += newItem.price;
    },
  },
});

export const {addItemToCart} = cartSlice.actions;

export default cartSlice.reducer;
