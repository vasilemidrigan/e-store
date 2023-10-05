import { getEntities } from "./read";
import { productsURL } from "@/data/api/endpoints";

function deleteEntity(url, entityId) {
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

function deleteEntities(limit) {
  getEntities(productsURL, { limit: limit }).then((targets) =>
    targets.data.forEach((target) => {
      deleteEntity(`${productsURL.origin}${productsURL.pathname}`, target.id);
    })
  );
}

export { deleteEntity, deleteEntities };
