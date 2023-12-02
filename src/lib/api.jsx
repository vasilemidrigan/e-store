import { S3_PRODUCT_IMAGES_URL } from "@/data/s3-endpoints";
import { Admin } from "@medusajs/medusa-js";
import { medusa } from "src/medusa-config";
import { createImageURLs } from "src/utils";

/* Working with API */

/* ********** write ********** */

/* write products */

export async function addProductToAPI(name, variant, price, categoryID) {
  await medusa.admin.products
    .create({
      title: name,
      variants: [
        {
          title: `${name} ${variant}`,
          prices: [
            {
              amount: price,
              currency_code: "EUR",
            },
          ],
        },
      ],
      categories: [{ id: categoryID }],
    })
    .then(({ product }) =>
      console.log(`Product ${product.title} initialized into API: `, product)
    );
}

export async function addInitialProductsToAPI(productsArray) {
  productsArray.forEach(async (productsParentObj) => {
    productsParentObj.products.forEach(async (product) => {
      const productCategory = await getCategoryByName(
        productsParentObj.category
      );
      await addProductToAPI(
        product.name,
        product.variant,
        product.price,
        productCategory.id
      );
    });
  });
}

/* write categories */
export async function addCategoriesToAPI(categoriesArray) {
  categoriesArray.forEach(async (cat) => {
    await medusa.admin.productCategories
      .create({
        name: cat,
      })
      .then(({ product_category }) => {
        console.log(
          `Category ${product_category.name} added to API: ${product_category}`
        );
      });
  });
}

/* ********** read ********** */

/* read products */
export async function getAllProductsFromAPI() {
  const allProducts = [];
  await medusa.admin.products.list().then(({ products }) => {
    console.log(
      `All products from API (total amount: ${products.length}): `,
      products
    );
    products.forEach((product) => allProducts.push(product));
  });
  return allProducts;
}

/* read categories */

export async function getCategoryByName(categoryName) {
  let targetCategory;
  await medusa.admin.productCategories.list().then(({ product_categories }) => {
    targetCategory = product_categories.find(
      (category) => category.handle === categoryName
    );
  });
  return targetCategory;
}

export async function getAllCategoriesFromAPI() {
  return await medusa.admin.productCategories
    .list()
    .then(({ product_categories }) => {
      console.log("All categories from API: ", product_categories);
      return product_categories;
    });
}

/* update */

/* update products */
export async function updateProduct(productID, property, value) {
  medusa.admin.products
    .update(productID, {
      [property]: value,
    })
    .then(({ product }) => {
      console.log(
        `Product ${product.title} updated: ${product[property]}: `,
        product.images
      );
    });
}

/* update products images*/
export async function assignImagesToAllProductsFromAPI() {
  const allProducts = await getAllProductsFromAPI();

  allProducts.forEach(async (product) => {
    const urls = createImageURLs(
      S3_PRODUCT_IMAGES_URL,
      product.categories[0].name,
      product.title
    );
    await updateProduct(product.id, "images", [...urls]);
  });
}
