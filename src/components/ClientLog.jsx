"use client";
/* Temporary Component for logging data into dev console */

import { useEffect } from "react";
import { initializeAPI } from "src/lib/initialize-api";

import { getAllCategoriesFromAPI } from "src/lib/api";
import { adminLogin, getCurrentUser } from "src/lib/auth";

import { fetchImages } from "src/utils";

export default function ClientLog() {
  useEffect(() => {
    // initializeAPI();
    // getAllProductsFromAPI();
    // medusa.admin.auth.deleteSession();
    // getAllCategoriesFromAPI();
    // getCurrentUser();
    // medusa.admin.auth.deleteSession();
    // getCurrentUser();
    // fetchImages("smartphone");
  }, []);

  return <></>;
}
