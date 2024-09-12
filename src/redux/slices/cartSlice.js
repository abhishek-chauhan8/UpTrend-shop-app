import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: () => {},
    removeItem: () => {},
  },
});


export const {addItem, removeItem} = CartSlice.actions;
export default CartSlice.reducer;
