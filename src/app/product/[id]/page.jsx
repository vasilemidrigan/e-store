import ProductCollage from "@/components/product/productCollage/ProductCollage";
import ProductDetails from "@/components/product/productDetails/ProductDetails";
import {
  getProductFromAPI,
  getProductFromAPIByID,
  getProductsByCategoryName,
} from "src/lib/api";

export default async function ProductPage({ params }) {
  const product = await getProductFromAPIByID(params.id);
  // const productImages = await getImagesByProductName(product?.name);

  return (
    <div className="ProductPage">
      {/* <ProductCollage images={productImages ? productImages : undefined} /> */}
      {/* <ProductDetails name={product.name} price={product.price} /> */}
    </div>
  );
}
