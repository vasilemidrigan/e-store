/* 
  If commerce.js is not initialized, then run initializeProductsToAPI(), 
  to populate it with products, that have name, price and images. 
  (For tests and development only.)
*/

import { initialProductsData, productsImgsURLs } from "src/api/productsData";
import {
  addAssetsToAPI,
  getAllProductsFromAPI,
  findAssetsByProductName,
  addProductToAPI,
  addAssetsToProduct,
  getAllAssetsFromAPI,
} from "./api";

import { assetsURL, s3URL } from "src/api/endpoints";

export default async function initializeProductsToAPI() {
  if (localStorage.getItem("isAPIInitialized")) return;

  await addAllProductsToAPI(initialProductsData);
  await addAllImagesToAPI();
  // await assignAssetsToAllProducts();

  // localStorage.setItem("isAPIInitialized", true);
}

async function addAllProductsToAPI(products) {
  const promises = [];
  for (let category of products) {
    for (let key in category) {
      if (key === "products") {
        for (let item of category[key]) {
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
        assets.push(
          await addAssetsToAPI({
            filename: `${product.name}-${i}.jpg`,
            // url: "https://www.online-image-editor.com/styles/2019/images/power_girl.png",
            url: `${s3URL}/${category.category}/${product.name}/${product.name}-${i}.jpg`,
          })
        );
      }
    }
  }

  return assets;
}

async function assignAssetsToAllProducts() {
  const products = await getAllProductsFromAPI();

  console.log(data);
  console.log(meta);

  console.log(allAssets);

  for (let product of products.data) {
    const assets = await findAssetsByProductName(product.name, assetsURL);
    console.log(assets);
    if (assets) {
      for (let i = 0; i < 4; i++) {
        console.log("!!!!!!!!!!!");
        // await addAssetsToProduct(product.id, {
        //   assets: { id: { id: assets[i]?.id } },
        // });
      }
    }
  }
}
