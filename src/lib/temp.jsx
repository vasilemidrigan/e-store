/* Initialize and delete data from Medusa.js */

import { INITIAL_CATEGORIES } from "@/data/initial-categories.js";
import {
  addCategoriesToAPI,
  addInitialProductsToAPI,
  assignImagesToAllProductsFromAPI,
  deleteAllCategoriesFromMedusa,
  deleteAllProductsFromMedusa,
} from "./api";
import { INITIAL_PRODUCTS } from "@/data/initial-products";

export async function initializeMedusa() {
  await addCategoriesToAPI(INITIAL_CATEGORIES);
  await addInitialProductsToAPI(INITIAL_PRODUCTS);
  await assignImagesToAllProductsFromAPI();
  console.log("Medusa is populated with all initial data!");
}

export async function deleteAllDataFromMedusa() {
  await deleteAllProductsFromMedusa();
  await deleteAllCategoriesFromMedusa();
  console.log("All data from Medusa is deleted!");
}
