/* Initialize API */

/*
  Populate our API with categories/products/product images

  1. addCategoriesToAPI(INITIAL_CATEGORIES)
  2. addInitialProductsToAPI(INITIAL_PRODUCTS)
  3. assignImagesToAllProducts();
*/

import { INITIAL_CATEGORIES } from "@/data/initial-categories.js";
import {
  addCategoriesToAPI,
  addInitialProductsToAPI,
  assignImagesToAllProductsFromAPI,
} from "./api";
import { INITIAL_PRODUCTS } from "@/data/initial-products";

export async function initializeAPI() {
  await addCategoriesToAPI(INITIAL_CATEGORIES);
  await addInitialProductsToAPI(INITIAL_PRODUCTS);
  await assignImagesToAllProductsFromAPI();
  console.log("Populating API - DONE!");
}
