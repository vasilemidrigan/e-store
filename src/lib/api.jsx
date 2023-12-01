import { medusa } from "src/api/medusa-config";

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
