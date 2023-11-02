import { getAllProductsFromAPI, getAllAssetsFromAPI } from "./api";

export default async function monitorizeAPI() {
  console.log("===================================");
  console.log("=== Products and Assets in API: ===");
  await getAllProductsFromAPI();
  await getAllAssetsFromAPI();
}
