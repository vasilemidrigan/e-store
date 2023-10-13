import { readFromDb } from "./read";
import { productsURL } from "src/data/api/endpoints";

function deleteItemFromDb(url, entityId) {
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

function deleteItemsFromDb(limit) {
  readFromDb(productsURL, { limit: limit }).then((targets) =>
    targets.data.forEach((target) => {
      deleteItemFromDb(
        `${productsURL.origin}${productsURL.pathname}`,
        target.id
      );
    })
  );
}

export { deleteItemFromDb, deleteItemsFromDb };
