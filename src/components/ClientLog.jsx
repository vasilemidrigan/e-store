"use client";
/* Temporary Component for logging data into dev console */

import {
  INITIAL_CATEGORIES,
  INITIAL_PRODUCTS,
} from "@/data/initial-categories.js";

import {
  addInitialProductsToAPI,
  addImagesToAllProducts,
  addCategoriesToAPI,
  getAllCategoriesFromAPI,
  getAllProductsFromAPI,
  assignImagesToAllProductsFromAPI,
} from "src/lib/api";
import { createSession } from "src/lib/auth";

import { useEffect } from "react";

export default function ClientLog() {
  useEffect(() => {
    // addInitialProductsToAPI(INITIAL_PRODUCTS);
    // addImagesToAllProducts();
    // addCategoriesToAPI(INITIAL_CATEGORIES);
    // getAllCategoriesFromAPI();
    // createSession();
    // getAllProductsFromAPI();
    // assignImagesToAllProductsFromAPI();
  }, []);

  return <></>;
}
