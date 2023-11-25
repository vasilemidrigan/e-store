const productsURL = new URL("https://api.chec.io/v1/products");
const categoriesURL = new URL("https://api.chec.io/v1/categories");
const assetsURL = new URL("https://api.chec.io/v1/assets");

export const s3ProductImagesBucketURL =
  "https://e-store-images.s3.eu-west-3.amazonaws.com";
export const s3ImageCarouselBucketURL =
  "https://image-carousel-assets.s3.eu-north-1.amazonaws.com";

export { productsURL, categoriesURL, assetsURL };
