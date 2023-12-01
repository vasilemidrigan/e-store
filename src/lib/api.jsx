import { medusa } from "src/api/medusa-config";

/* Working with API */

/* ********** write ********** */

/* 
  products 
  (add all hardcoded products to API, by assigning to them the title, subtitle
    price and category )
*/
export async function addInitialProductsToAPI(productsArray) {
  productsArray.forEach(async (productsObj) => {
    productsObj.products.forEach(async (prod) => {
      await medusa.admin.products
        .create({
          title: prod.name,
          variants: [
            {
              title: prod.variant,
              prices: [
                {
                  amount: prod.price,
                  currency_code: "EUR",
                },
              ],
            },
          ],
        })
        .then(({ product }) =>
          console.log(`Product ${product.title} added to API: `, product)
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

/* categories */
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

/* products */
export async function getAllProductsIDsFromAPI() {
  const productsIDs = [];
  medusa.admin.products.list().then(({ products }) => {
    products.forEach((prod) => {
      productsIDs.push(prod.id);
    });
  });
  return productsIDs;
}

/* categories */

export async function getAllCategoriesFromAPI() {
  medusa.admin.productCategories.list().then(({ product_categories }) => {
    console.log("All categories from API: ", product_categories);
  });
}
