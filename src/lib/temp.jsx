/* Initialize and delete data from Medusa.js */

import { INITIAL_CATEGORIES } from "@/data/initial-categories.js";
import {
  addCategoriesToMedusa,
  addInitialProductsToMedusa,
  assignImagesToAllProductsFromMedusa,
  deleteAllCategoriesFromMedusa,
  deleteAllProductsFromMedusa,
} from "./api";
import { INITIAL_PRODUCTS } from "@/data/initial-products";

export async function initializeMedusa() {
  await addCategoriesToMedusa(INITIAL_CATEGORIES);
  await addInitialProductsToMedusa(INITIAL_PRODUCTS);
  await assignImagesToAllProductsFromMedusa();
  console.log("Medusa is populated with all initial data!");
}

export async function deleteAllDataFromMedusa() {
  await deleteAllProductsFromMedusa();
  await deleteAllCategoriesFromMedusa();
  console.log("All data from Medusa is deleted!");
}
