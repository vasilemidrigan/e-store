/*
  Notes: 
    Find a better solution to use headers in order to avoid hardcoding 
*/

import { productsURL } from "src/api/commercejs/endpoints";

// Commercejs

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

// create
function addItemToCommerceJS(item) {
  fetchTemplate(productsURL, "POST", secretHeaders, { product: item });
}

export function addMultipleItemsToCommerceJS(products) {
  products.forEach((category) => {
    for (let key in category) {
      if (key !== "category") {
        category[key].forEach((item) => {
          addItemToCommerceJS(item);
        });
      }
    }
  });
}

// read
export async function readAllItemsFromCommerceJS() {
  const items = await fetchTemplate(productsURL, "GET", publicHeaders);
  return items;
}

// delete
export function deleteItemFromDb(url, id) {
  fetchTemplate(`${url}${id}`, "DELETE", secretHeaders);
}

export function deleteItemsFromDb() {
  readAllItemsFromCommerceJS().then((targets) => {
    console.log(targets);
    targets.data.forEach((target) => {
      deleteItemFromDb(productsURL, target.id);
    });
  });
}

async function fetchTemplate(url, method, headers, body) {
  const data = await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
  return data;
}

/*
 export function createCategories(url) {
   const headers = {
     "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY_SECRET}`,
     "Content-Type": "application/json",
     Accept: "application/json",
   };

   productsListing.forEach((category) => {
     fetch(url, {
       method: "POST",
       headers: headers,
       body: JSON.stringify({
         name: category.name,
         slug: `${category.name}`,
       }),
     });
     category.subcategories.forEach((subcategory) => {
       fetch(url, {
         method: "POST",
         headers: headers,
         body: JSON.stringify({
           name: subcategory.name,
           slug: subcategory.name,
         }),
       });
     });
   });
 }

 export function updateCategories() {
   const url = new URL("https://api.chec.io/v1/categories");

   const headers = {
     "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY_SECRET}`,
     "Content-Type": "application/json",
     Accept: "application/json",
   };

   fetch(url, {
     method: "PUT",
     headers: headers,
     body: JSON.stringify({ description: "utuutututu" }),
   }).then((response) => response.json());
 }

 Firebase
  
  get images from firebase storage
  storageImagesRef: a reference to images from firebase storage
 
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
*/
