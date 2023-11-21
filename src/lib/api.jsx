import { revalidatePath, revalidateTag } from "next/cache";
import { productsURL, assetsURL, categoriesURL } from "src/api/endpoints";
import { initialProductsData } from "src/api/initial-products";
import fetchTemplate, { publicHeaders, secretHeaders } from "./fetch";

/* write */

export async function addProductToAPI(item) {
  const product = await fetchTemplate(productsURL.href, "POST", secretHeaders, {
    product: { ...item },
  });
  return product;
}

export async function addAssetsToAPI(assets) {
  const promises = [];
  promises.push(
    await fetchTemplate(assetsURL.href, "POST", secretHeaders, assets)
  );
  return promises;
}

export async function addAssetsToProduct(productId, assets) {
  await fetchTemplate(
    `${productsURL.href}/${productId}/assets`,
    "POST",
    secretHeaders,
    assets
  );
}

/* read */

export async function getProductFromAPI(name) {
  const { data: products } = await getEntireClassFromAPI(
    getFirstPageFromClassInAPI,
    productsURL
  );
  const product = await products.find((product) => product.name === name);
  return product ? product : console.log("product not found");
}

export async function getProductsByCategoryName(categoryName, page = 1) {
  const { data: allCategories } = await getAllCategories();
  const targetCategory = allCategories.find((cat) => cat.name === categoryName);

  const params = {
    category_id: targetCategory?.id,
    page: page,
  };
  Object.keys(params).forEach((key) =>
    productsURL.searchParams.append(key, params[key])
  );

  const data = await fetchTemplate(productsURL, "GET", publicHeaders);
  const products = data.data;
  const metadata = data.meta;

  productsURL.searchParams.delete("category_id");
  productsURL.searchParams.delete("page");

  return {
    products: products,
    metadata: {
      hasNextPage: metadata.pagination.links?.next,
      totalPages: metadata.pagination.total_pages,
    },
  };
}

export async function getFirstPageFromClassInAPI(url) {
  const entities = await fetchTemplate(url, "GET", secretHeaders);
  console.log(url.pathname, " -> ", entities);
  return entities;
}

export async function getEntireClassFromAPI(targetFunction, url) {
  const promises = await targetFunction(url);
  const totalPages = promises.meta.pagination.total_pages;
  let nextPage = promises.meta.pagination.links.next;
  for (let i = 2; i <= totalPages; i++) {
    const results = await targetFunction(nextPage);
    nextPage = results.meta.pagination.links.next;
    promises.data.push(...results.data);
    Object.assign(promises.meta.pagination, results.meta.pagination);
  }
  console.log(promises);
  return promises;
}

export async function getAllCategories() {
  const categories = await fetchTemplate(categoriesURL, "GET", publicHeaders);
  return categories;
}

export async function getImagesByProductName(productName) {
  let targetImages = [];
  const { data: assets } = await getEntireClassFromAPI(
    getFirstPageFromClassInAPI,
    assetsURL
  );
  if (assets.length > 0) {
    targetImages.push(
      assets.filter((img) => img.filename.slice(0, -6) === productName)
    );
  }
  if (assets.length === 0) {
    console.log("No assets in API");
    return;
  }

  return targetImages;
}

/* update */

export async function updateProductFromAPI(productId, body) {
  const product = await fetchTemplate(
    `${productsURL.href}/${productId}`,
    "PUT",
    secretHeaders,
    body
  );
  return product;
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
    await deleteOnePageFromClassInAPI(url);
  }
}
