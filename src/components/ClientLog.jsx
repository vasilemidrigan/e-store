"use client";
/* Temporary Components for logging data into dev console */

import {
  deleteEntireClassFromAPI,
  deleteImagesByType,
  getEntireClassFromAPI,
  getFirstPageFromClassInAPI,
  getImagesByType,
} from "src/lib/api";
import { assetsURL, categoriesURL, productsURL } from "src/api/endpoints";
import initializeProductsToAPI, {
  addAllCategoriesToAPI,
  addAllImagesToAPI,
  addAllProductsToAPI,
  addCategoryIllustrationsToAPI,
  addImageCarouselAssets,
  assignAssetsToAllProducts,
  assignCategoriesToAllProducts,
} from "src/lib/initialize-api";
import { initialProductsData } from "src/api/initial-products";

export default function ClientLog() {
  console.log("*** LOGGING DATA ***");

  // deleteEntireClassFromAPI(productsURL);
  // deleteEntireClassFromAPI(assetsURL);
  // deleteEntireClassFromAPI(categoriesURL);

  // addAllProductsToAPI(initialProductsData);
  // assignCategoriesToAllProducts();
  // assignAssetsToAllProducts();

  // addAllImagesToAPI();
  // addAllCategoriesToAPI();

  // initializeProductsToAPI();

  // getEntireClassFromAPI(getFirstPageFromClassInAPI, productsURL);
  // getEntireClassFromAPI(getFirstPageFromClassInAPI, categoriesURL);
  // getEntireClassFromAPI(getFirstPageFromClassInAPI, assetsURL);

  // addImageCarouselAssets();
  // getImagesByType("category-illustration");
  // deleteImagesByType("image-carousel");
  // deleteImagesByType("category-illustration");
  // addCategoryIllustrationsToAPI();



  return <></>;
}
