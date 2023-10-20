import { productsURL } from "src/api/commercejs/endpoints";
import { productsURL } from "src/api/commercejs/endpoints";

import { listAll, getDownloadURL } from "firebase/storage";

// Commercejs

// read commercejs
export function readFromDb(url, params) {
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  return fetch(url, {
    method: "GET",
    headers: {
      "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
}

// write commercejs
export function addItemToDb(url, body) {
  fetch(url, {
    method: "POST",
    headers: {
      "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY_SECRET}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

export function addItemsToDb(itemsList) {
  itemsList.forEach((item) => {
    createItemIntoDb(productsURL, {
      product: {
        name: item.name,
        price: item.price,
      },
    });
  });
}

// delete commercejs
export function deleteItemFromDb(url, entityId) {
  let targetURL = `${url}${entityId}`;
  fetch(targetURL, {
    method: "DELETE",
    headers: {
      "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY_SECRET}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

export function deleteItemsFromDb(limit) {
  readFromDb(productsURL, { limit: limit }).then((targets) =>
    targets.data.forEach((target) => {
      deleteItemFromDb(
        `${productsURL.origin}${productsURL.pathname}`,
        target.id
      );
    })
  );
}

// Firebase 

// get images from firebase storage
// storageImagesRef: a reference to images from firebase storage
export default function getImages(storageImagesRef) {
  const imgURLs = [];

  listAll(storageImagesRef).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        imgURLs.push(url);
      });
    });
  });

  return imgURLs;
}
