import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsURL } from "src/api/commercejs/endpoints";

const initialState = {
  products: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch(productsURL, { limit: 100 });
      return [...response];
    } catch (err) {
      return err.message;
    }
  }
);

const getProducts = createSlice({
  name: "products",
  initialState,
  reducers: {
    productAdded(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const productAdded = getProducts.actions;
export default getProducts.reducer;
