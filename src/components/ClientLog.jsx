"use client";
/* Temporary Component for logging data into dev console */

import { useEffect } from "react";
import { initializeAPI } from "src/lib/temp";

import { medusa } from "src/medusa-config";
import {
  addInitialProductsToMedusa,
  assignImagesToAllProductsFromMedusa,
  deleteAllCategoriesFromMedusa,
  deleteAllProductsFromMedusa,
  deleteProductFromMedusa,
  getAllCategoriesFromMedusa,
  getAllProductsFromMedusa,
  getImagesForImageCarouselFromS3,
} from "src/lib/api";
import {
  adminLogin,
  createSession,
  deleteSession,
  getCurrentUser,
} from "src/lib/auth";

import { fetchImages } from "src/utils";
import { INITIAL_PRODUCTS } from "@/data/initial-products";
import { INITIAL_CATEGORIES } from "@/data/initial-categories.js";

export default function ClientLog() {
  useEffect(() => {
    // initializeAPI();
    // getAllProductsFromMedusa();
    // medusa.admin.auth.deleteSession();
    // getCurrentUser();
    // medusa.admin.auth.deleteSession();
    // deleteSession();
    // getCurrentUser();
    // fetchImages("smartphone");
    // deleteProductFromAPI();
    // async function foo() {
    //   await getAllCategoriesFromAPI();
    //   await getAllProductsFromAPI();
    //   await deleteAllCategoriesFromAPI();
    // }
    // addInitialProductsToMedusa(INITIAL_PRODUCTS, 4);
    // assignImagesToAllProductsFromMedusa();
    // deleteAllProductsFromMedusa();
    // getAllProductsFromMedusa();
  }, []);

  return <></>;
}
