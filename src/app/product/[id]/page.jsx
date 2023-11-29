import ProductCollage from "@/components/product/productCollage/ProductCollage";
import ProductDetails from "@/components/product/productDetails/ProductDetails";
import {
  getProductFromAPI,
  getProductFromAPIByID,
  getProductsByCategoryName,
} from "src/lib/api";

export default async function ProductPage({ params }) {
  const product = await getProductFromAPIByID(params.id);

  return (
    <div className="ProductPage">
      <ProductCollage images={product.assets} />
      <ProductDetails name={product.name} price={product.price} />
    </div>
  );
}
