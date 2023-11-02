/* 
  If commerce.js is not initialized, then run initializeProductsToAPI(), 
  to populate it with products, that will initially have name, price and images. 
  (For tests and development only.)

  !important
  Check localStorage, and delete isAPIInitialized property in order to be able 
  to run initializeProductsToAPI()
*/

import { initialProductsData, productsImgsURLs } from "src/api/productsData";
import {
  addAssetsToAPI,
  addProductToAPI,
  addAssetsToProduct,
  getEntireClassFromAPI,
  getFirstPageFromClassInAPI,
} from "./api";

import { assetsURL, productsURL, s3URL } from "src/api/endpoints";

export default async function initializeProductsToAPI() {
  if (localStorage.getItem("isAPIInitialized")) return;

  await addAllProductsToAPI(initialProductsData);
  await addAllImagesToAPI();
  await assignAssetsToAllProducts();

  localStorage.setItem("isAPIInitialized", true);
}

async function addAllProductsToAPI(products) {
  const promises = [];
  for (let category of products) {
    for (let key in category) {
      if (key === "products") {
        for (let item of category[key]) {
          console.log(`adding ${item.name} product...`);
          await promises.push(addProductToAPI(item));
        }
      }
    }
  }

  return promises;
}

async function addAllImagesToAPI() {
  const assets = [];

  for (let category of productsImgsURLs) {
    for (let product of category.products) {
      for (let i = 0; i < 4; i++) {
        console.log(`adding ${product.name}-${i}.jpg image file...`);
        assets.push(
          await addAssetsToAPI({
            filename: `${product.name}-${i}.jpg`,
            url: `${s3URL}/${category.category}/${product.name}/${product.name}-${i}.jpg`,
          })
        );
      }
    }
  }

  return assets;
}

async function assignAssetsToAllProducts() {
  const products = await getEntireClassFromAPI(
    getFirstPageFromClassInAPI,
    productsURL
  );
  const { data: allAssets } = await getEntireClassFromAPI(
    getFirstPageFromClassInAPI,
    assetsURL
  );
  for (let product of products.data) {
    const assets = allAssets.filter(
      (asset) => asset.filename.slice(0, -6) === product.name
    );
    if (assets) {
      for (let i = 0; i < assets.length; i++) {
        console.log(`assigning ${assets[i].id} to ${product.name}`);
        await addAssetsToProduct(product.id, {
          assets: { id: { id: assets[i]?.id } },
        });
      }
    }
  }
}
