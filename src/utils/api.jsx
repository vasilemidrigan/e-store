import { productsURL, assetsURL } from "src/api/endpoints";
import { initialProductsData } from "src/api/productsData";
import fetchTemplate, { publicHeaders, secretHeaders } from "./fetch";

/* write */

export async function addProductToAPI(item) {
  const product = await fetchTemplate(productsURL.href, "POST", secretHeaders, {
    product: item,
  });
  return product;
}

export async function addAssetsToAPI(body) {
  const promises = [];
  promises.push(
    await fetchTemplate(assetsURL.href, "POST", secretHeaders, body)
  );
  return promises;
}

export async function addAssetsToProduct(productId, body) {
  await fetchTemplate(
    `${productsURL.href}/${productId}/assets`,
    "POST",
    secretHeaders,
    body
  );
}

export async function findAssetsByProductName(productName, url) {
  const allAssets = await getAllAssetsFromAPI(url);
  const targetAsset = await allAssets.data.filter((asset) => {
    return asset.filename.slice(0, -6) === productName;
  });

  if (targetAsset.length > 0) console.log(targetAsset[0].filename);

  if (targetAsset.length == 0 && allAssets.meta.pagination.links.next) {
    findAssetsByProductName(productName, allAssets.meta.pagination.links.next);
  } else {
    return targetAsset;
  }
}

/* read */

export async function getProductFromAPI(name) {
  const products = await getAllProductsFromAPI();
  const product = await products.data?.find((product) => product.name === name);
  return product;
}

export async function getAllProductsFromAPI(url = productsURL) {
  const products = await fetchTemplate(url, "GET", publicHeaders);
  return products;
}

export async function getAllAssetsFromAPI(url = assetsURL) {
  const assets = await fetchTemplate(url, "GET", secretHeaders);
  return assets;
}

/* delete */

export function deleteProductFromAPI(url, id) {
  fetchTemplate(`${url}/${id}`, "DELETE", secretHeaders);
}

export async function deleteAssetFromProduct(product, asset) {
  if (asset == undefined) return;
  await fetch(`${productsURL}/${product?.id}/assets/${asset?.id}`, {
    method: "DELETE",
    headers: secretHeaders,
  });
}

export async function deleteAssetsFromProducts() {
  let promises = [];
  for (let category of initialProductsData) {
    for (let product of category.products) {
      const productTarget = await getProductFromDb(product.name);

      for (let i = 0; i < 4; i++) {
        const assets = await getAssetsByProductName(productTarget?.name);
        promises.push;

        await deleteAssetFromProduct(productTarget, assets[i]);
      }
    }
  }
  return promises;
}

export async function deleteOnePageFromClassInAPI(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: secretHeaders,
  });

  const data = await response.json();
  if (data.data) {
    for (let entity of data.data) {
      console.log("delete ", entity.id, "...");
      await fetch(`${url}/${entity.id}`, {
        method: "DELETE",
        headers: secretHeaders,
      });
    }
  }
  return data.meta.pagination.total_pages;
}

export async function deleteEntireClassFromAPI(url) {
  const pagesAmount = await deleteOnePageFromClassInAPI(url);
  for (let i = 2; i <= pagesAmount; i++) {
    await deleteOnePageFromClassInAPI(productsURL);
  }
}
