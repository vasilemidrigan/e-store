import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./components/productCard/productCardSlice";

export default configureStore({
  reducer: {
    products: productReducer,
  },
});
