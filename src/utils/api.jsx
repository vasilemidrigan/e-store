import { productsURL, assetsURL } from "src/api/commercejs/endpoints";

import { storage } from "src/api/firebase/firebase-config";
import { listAll, ref } from "firebase/storage";

// ****** fetch ******

const publicHeaders = {
  "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY}`,
  Accept: "application/json",
  "Content-Type": "application/json",
};

const secretHeaders = {
  "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY_SECRET}`,
  Accept: "application/json",
  "Content-Type": "application/json",
};

async function fetchTemplate(url, method, headers, body) {
  const data = await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error("An error occured in fetchTemplate()", err));
  return data;
}

// ****** write ******

function addProductToDb(item) {
  fetchTemplate(productsURL, "POST", secretHeaders, { product: item });
}

export function addAllProductsToDb(products) {
  products.forEach((category) => {
    for (let key in category) {
      if (key !== "category") {
        category[key].forEach((item) => {
          addProductToDb(item);
        });
      }
    }
  });
}

async function createAssets(body) {
  const data = await fetchTemplate(assetsURL, "POST", secretHeaders, body);
}

async function addAssetsToProducts(productId, body) {
  const data = await fetchTemplate(
    `${productsURL}${productId}/assets`,
    "POST",
    secretHeaders,
    body
  );
}

// ****** read ******

export async function getAllProductsFromDb() {
  const items = await fetchTemplate(productsURL, "GET", publicHeaders);
  items.data.forEach((item) => {
    if (item.name === "Apple iPad Pro") console.log(item);
  });
  return items;
}

async function listAssets() {
  const assets = await fetchTemplate(assetsURL, "GET", secretHeaders);
}

// ****** delete ******

async function deleteAllAssets() {
  const assets = await listAssets();
  const url = new URL("https://api.chec.io/v1/assets");

  const headers = {
    "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY_SECRET}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  assets.forEach((asset) => {
    fetch(`${url}/${asset.id}`, {
      method: "DELETE",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
}

export function deleteProductFromDb(url, id) {
  fetchTemplate(`${url}${id}`, "DELETE", secretHeaders);
}

export function deleteProductsFromDb() {
  getAllProductsFromDb().then((targets) => {
    targets.data.forEach((target) => {
      deleteProductsFromDb(productsURL, target.id);
    });
  });
}

// ****** firebase storage ******

export const appleRef = ref(storage, "apple/imac-24/imac-24-inch-1.jpg");
console.log(appleRef);

export default function getImages(storageImagesRef) {
  const imgURLs = [];

  listAll(storageImagesRef).then((response) => {
    console.log(storageImagesRef);
    console.log(response);
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        imgURLs.push(url);
      });
    });
  });
  return imgURLs;
}
