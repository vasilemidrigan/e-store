import { S3_PRODUCT_IMAGES_URL } from "@/data/s3-endpoints";
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

export async function getProductsByCategoryFromAPI(categoriesArr) {
  return await medusa.admin.products
    .list({ category_id: categoriesArr })
    .then(({ products, limit, offset, count }) => {
      console.log("products are: ", products);
      return products;
    });
}

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
  console.log("getAllCAtegories funciton ran");
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

/* delete */

/* delete a product */

export async function deleteProductFromAPI() {
  const allProducts = await getAllProductsFromAPI();

  medusa.admin.products
    .delete(allProducts[0].id)
    .then(({ id, object, deleted }) => {
      console.log(`Product ${id}, was deleted!!!`);
    });
}

export async function deleteAllProductsFromAPI() {
  const allProducts = await getAllProductsFromAPI();

  for (const product of allProducts) {
    await medusa.admin.products
      .delete(product.id)
      .then(({ id, object, deleted }) => {
        console.log(`Product ${id}, was deleted!!!`);
      });
  }
}

/* delete categories */

export async function deleteAllCategoriesFromAPI() {
  const allCategories = await medusa.admin.productCategories
    .list()
    .then(({ product_categories, limit, offset, count }) => {
      console.log(
        "There are: ",
        product_categories.length,
        " product categories"
      );
      return product_categories;
    });

  for (const category of allCategories) {
    await medusa.admin.productCategories
      .delete(category.id)
      .then(({ id, object, deleted }) => {
        console.log(`Category ${id} is deleted!`);
      });
  }
}
