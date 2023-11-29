import ProductCollage from "@/components/product/productCollage/ProductCollage";
import ProductDetails from "@/components/product/productDetails/ProductDetails";
import { getImagesByProductName, getProductFromAPI } from "src/lib/api";

export default async function ProductPage({ params }) {
  const product = await getProductFromAPI(params.id);
  const productImages = await getImagesByProductName(product?.name);

  return (
    <div className="ProductPage">
      <ProductCollage images={productImages ? productImages : undefined} />
      <ProductDetails name={product.name} price={product.price} />
    </div>
  );
}
