import { medusa } from "src/api/medusa-config";

/* Working with API */

/* ********** write ********** */

/* write products */
export async function addInitialProductsToAPI(productsArray) {
  productsArray.forEach(async (productsParentObj) => {
    productsParentObj.products.forEach(async (product) => {
      const productCategory = await getCategoryByName(
        productsParentObj.category
      );
      await medusa.admin.products
        .create({
          title: product.name,
          variants: [
            {
              title: `${product.name} ${product.variant}`,
              prices: [
                {
                  amount: product.price,
                  currency_code: "EUR",
                },
              ],
            },
          ],
          categories: [{ id: productCategory.id }],
        })
        .then(({ product }) =>
          console.log(
            `Product ${product.title} initialized into API: `,
            product
          )
        );
    });
  });
}

export async function addAllProductsToCategories() {
  medusa.admin.productCategories
    .addProducts(productCategoryId, {
      product_ids: [
        {
          id: productId,
        },
      ],
    })
    .then(({ product_category }) => {
      console.log(product_category.id);
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
export async function getAllProductsIDFromAPI() {
  const productsIDs = [];
  medusa.admin.products.list().then(({ products }) => {
    products.forEach((prod) => {
      productsIDs.push(prod.id);
    });
  });
  return productsIDs;
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
  medusa.admin.productCategories.list().then(({ product_categories }) => {
    console.log("All categories from API: ", product_categories);
  });
}
