import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./features/products/productsSlice";

export default configureStore({
  reducer: {
    products: productReducer,
  },
});
