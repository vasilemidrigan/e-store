import { productsURL } from "src/data/api/endpoints";

function addItemToDb(url, body) {
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

function addItemsToDb(itemsList) {
  itemsList.forEach((item) => {
    createItemIntoDb(productsURL, {
      product: {
        name: item.name,
        price: item.price,
      },
    });
  });
}

export { addItemToDb, addItemsToDb };
