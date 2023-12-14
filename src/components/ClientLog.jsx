"use client";
/* Temporary Component for logging data into dev console */

import { useEffect } from "react";
import { initializeAPI } from "src/lib/initialize-api";

import { medusa } from "src/medusa-config";
import {
  deleteAllCategories,
  deleteAllCategoriesFromAPI,
  deleteProductFromAPI,
  getAllCategoriesFromAPI,
  getAllProductsFromAPI,
} from "src/lib/api";
import {
  adminLogin,
  createSession,
  deleteSession,
  getCurrentUser,
} from "src/lib/auth";

import { fetchImages } from "src/utils";

export default function ClientLog() {
  useEffect(() => {
    // initializeAPI();
    // getAllProductsFromAPI();
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
  }, []);

  return <></>;
}
