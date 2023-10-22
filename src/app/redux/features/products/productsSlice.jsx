import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { readAllItemsFromCommerceJS } from "src/utils/api";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
        state.products = action.payload;
        console.log(state.status, action);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        console.log(state.status, state.products);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.products = action.error.message;
        console.log(state.status, action);
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => readAllItemsFromCommerceJS()
);

export default productsSlice.reducer;

export const selectProducts = (state) => state.products;
