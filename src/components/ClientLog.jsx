"use client";
/* Temporary Component for logging data into dev console */

import { initialProductsData } from "src/api/initial-products";
import { initialCategories } from "src/api/initial-categories-data";

import {
  addInitialProductsToAPI,
  addImagesToAllProducts,
  addCategoriesToAPI,
  getAllCategoriesFromAPI,
} from "src/lib/api";
import { createSession } from "src/lib/auth";

import { useEffect } from "react";

export default function ClientLog() {
  useEffect(() => {
    // addInitialProductsToAPI(initialProductsData);
    // addImagesToAllProducts();
    // addCategoriesToAPI(initialCategories);
    // getAllCategoriesFromAPI();
    // createSession();
  }, []);

  return <></>;
}
