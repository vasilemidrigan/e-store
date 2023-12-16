import { IMAGE_CAROUSEL } from "@/data/image-carousel";
import {
  S3_IMAGE_CAROUSEL_URL,
  S3_PRODUCT_IMAGES_URL,
} from "@/data/s3-endpoints";
import { medusa } from "src/medusa-config";
import { createImageURLs, generateSequenceFrom0ToN } from "src/utils";

/* Working with Medusa API and S3 */

/* ********** write ********** */

/* write products */

export async function addProductToMedusa(name, variant, price, categoryID) {
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

export async function addInitialProductsToMedusa(productsArray, iterations) {
  const iterationsArr = generateSequenceFrom0ToN(iterations);

  for (const n of iterationsArr) {
    productsArray.forEach(async (productsParentObj) => {
      productsParentObj.products.forEach(async (product) => {
        const productCategory = await getCategoryByNameFromMedusa(
          productsParentObj.category
        );
        await addProductToMedusa(
          `${product.name} ${n}`,
          `${product.variant} ${n}`,
          product.price,
          productCategory.id
        );
      });
    });
  }
}

/* write categories */

export async function addCategoriesToMedusa(categoriesArray) {
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

export async function getProductByIdFromMedusa(productId) {
  return await medusa.admin.products.retrieve(productId).then(({ product }) => {
    return product;
  });
}

export async function getProductsByCategoryFromMedusa(categoriesArr) {
  return await medusa.admin.products
    .list({ category_id: categoriesArr })
    .then(({ products, limit, offset, count }) => {
      console.log("products are: ", products);
      return {
        products: [...products],
        offset,
        limit,
        count,
      };
    });
}

export async function getAllProductsFromMedusa() {
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

export async function getCategoryByNameFromMedusa(categoryName) {
  let targetCategory;
  await medusa.admin.productCategories.list().then(({ product_categories }) => {
    targetCategory = product_categories.find(
      (category) => category.handle === categoryName
    );
  });
  return targetCategory;
}

export async function getAllCategoriesFromMedusa() {
  return await medusa.admin.productCategories
    .list()
    .then(({ product_categories }) => {
      console.log("All categories from API: ", product_categories);
      return product_categories;
    });
}

/* read images */

export async function getImagesForImageCarouselFromS3() {
  const images = [];
  for (let i = 1; i < 4; i++) {
    const response = await fetch(`${S3_IMAGE_CAROUSEL_URL}/img-${i}.jpg`);
    images.push({ id: i, url: response.url });
  }

  return images;
}

/* update */

/* update products */

export async function updateProductFromMedusa(productID, property, value) {
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

export async function assignImagesToAllProductsFromMedusa() {
  const allProducts = await getAllProductsFromMedusa();

  allProducts.forEach(async (product) => {
    const urls = createImageURLs(
      S3_PRODUCT_IMAGES_URL,
      product.categories[0].name,
      product.title
    );
    await updateProductFromMedusa(product.id, "images", [...urls]);
  });
}

/* delete */

/* delete a product */

export async function deleteProductFromMedusa() {
  const allProducts = await getAllProductsFromAPI();

  medusa.admin.products
    .delete(allProducts[0].id)
    .then(({ id, object, deleted }) => {
      console.log(`Product ${id}, was deleted!!!`);
    });
}

export async function deleteAllProductsFromMedusa() {
  const allProducts = await getAllProductsFromMedusa();

  for (const product of allProducts) {
    await medusa.admin.products
      .delete(product.id)
      .then(({ id, object, deleted }) => {
        console.log(`Product ${id}, was deleted!!!`);
      });
  }
}

/* delete categories */

export async function deleteAllCategoriesFromMedusa() {
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

  allCategories.forEach(async (category) => {
    await medusa.admin.productCategories
      .delete(category.id)
      .then(({ id, object, deleted }) => {
        console.log(`Category ${id} is deleted!`);
      });
  });
}
