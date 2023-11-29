/* 
  If commerce.js is not initialized, then run initializeProductsToAPI(), 
  to populate it with products, that will initially have name, price, images. 
  Also it will create categories and assign products to them.
  (For tests and development only.)

  !important
  Check localStorage, and delete isAPIInitialized property in order to be able 
  to run initializeProductsToAPI()

  ! To change initializeProductsToAPI() by using Promise.all[]
*/

import { initialProductsData } from "src/api/initial-products";
import {
  addAssetsToAPI,
  addProductToAPI,
  addAssetsToProduct,
  getEntireClassFromAPI,
  getFirstPageFromClassInAPI,
  updateProductFromAPI,
  getAllCategories,
} from "./api";

import {
  assetsURL,
  categoriesURL,
  productsURL,
  s3CategoryIllustrationsURL,
  s3ImageCarouselBucketURL,
  s3ProductImagesBucketURL,
} from "src/api/endpoints";
import fetchTemplate, { secretHeaders } from "./fetch";
import { CATEGORY_ILLUSTRATIONS_LIST } from "@/data/constants";

export default async function initializeProductsToAPI() {
  if (localStorage.getItem("isAPIInitialized")) {
    console.log("localStorage isAPIInitialized: true");
    return;
  }

  await addAllCategoriesToAPI();
  await addCategoryIllustrationsToAPI();

  await addAllProductsToAPI(initialProductsData);
  await assignCategoriesToAllProducts();
  await addAllImagesToAPI();
  await assignAssetsToAllProducts();

  await addImageCarouselAssets();

  localStorage.setItem("isAPIInitialized", true);
}

export async function addAllCategoriesToAPI() {
  for (let category of initialProductsData) {
    fetchTemplate(categoriesURL, "POST", secretHeaders, {
      name: category.category,
      slug: category.category,
    });
  }
}

export async function addCategoryIllustrationsToAPI() {
  const promises = [];
  CATEGORY_ILLUSTRATIONS_LIST.forEach(async (cat) => {
    promises.push(
      await addAssetsToAPI(
        {
          filename: `${cat}.jpg`,
          url: `${s3CategoryIllustrationsURL}/${cat}.jpg`,
          meta: [{ type: "category-illustration" }],
        },
        "no-store"
      )
    );
  });

  console.log("promises are: ", promises);
  return promises;
}

export async function addAllProductsToAPI(productsArr) {
  const promises = [];
  const { data: categories } = await getEntireClassFromAPI(
    getFirstPageFromClassInAPI,
    categoriesURL
  );

  let categoryName = "";
  let categoryTarget = "";

  for (let category of productsArr) {
    for (let property in category) {
      if (categoryName !== category.category) {
        categoryName = category.category;
        categoryTarget = await categories.find(
          (cat) => cat.name === categoryName
        );
      }

      if (property == "products") {
        for (let product of category[property]) {
          console.log(`adding ${product.name} product...`);
          for (let i = 0; i < 100; i++) {
            // add 3 instances of the product
            promises.push(
              await addProductToAPI({
                ...product,
                meta: { category: category.category, nr: i },
              })
            );
          }
        }
      }
    }
  }
  return promises;
}

export async function assignCategoriesToAllProducts() {
  const { data: products } = await getEntireClassFromAPI(
    getFirstPageFromClassInAPI,
    productsURL
  );

  const { data: categories } = await getAllCategories();

  for (let product of products) {
    const { id: categoryId, name: categoryName } = await categories.find(
      (cat) => cat.name === product.meta.category
    );
    console.log(product.id, product.name);
    console.log(categoryName);
    await updateProductFromAPI(product.id, {
      categories: [{ id: categoryId }],
    });
  }
}

export async function addAllImagesToAPI() {
  const assets = [];

  for (let category of initialProductsData) {
    for (let product of category.products) {
      for (let i = 0; i < 4; i++) {
        console.log(`adding ${product.name}-${i}.jpg image file...`);
        assets.push(
          await addAssetsToAPI({
            filename: `${product.name}-${i}.jpg`,
            url: `${s3ProductImagesBucketURL}/${category.category}/${product.name}/${product.name}-${i}.jpg`,
          })
        );
      }
    }
  }
  return assets;
}

export async function addImageCarouselAssets() {
  const promises = [];
  const imgsAmount = 3;
  let i = 1;

  while (i <= imgsAmount) {
    console.log(i);
    promises.push(
      await addAssetsToAPI(
        {
          filename: `img-${i}.jpg`,
          url: `${s3ImageCarouselBucketURL}/img-${i}.jpg`,
          meta: [{ type: "image-carousel" }, { id: `${i}` }],
        },
        "no-store"
      )
    );

    ++i;
  }

  console.log(JSON.stringify(promises, null, 4));
  return promises;
}

export async function assignAssetsToAllProducts() {
  const { data: products } = await getEntireClassFromAPI(
    getFirstPageFromClassInAPI,
    productsURL
  );
  const { data: allAssets } = await getEntireClassFromAPI(
    getFirstPageFromClassInAPI,
    assetsURL
  );

  for (let product of products) {
    const assets = allAssets.filter(
      (asset) => asset.filename.slice(0, -6) === product.name
    );
    if (assets) {
      for (let i = 0; i < assets.length; i++) {
        console.log(`assigning ${assets[i].id} to ${product.name}`);
        console.log(assets);
        await addAssetsToProduct(product.id, {
          assets: [{ id: assets[i]?.id }],
        });
      }
    }
  }
}
