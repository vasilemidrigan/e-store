import { getProductByIdFromMedusa } from "src/lib/api";

import ProductCollage from "@/components/product/productCollage/ProductCollage";
import ProductDetails from "@/components/product/productDetails/ProductDetails";

export default async function ProductPage({ params }) {
  const product = await getProductByIdFromMedusa(params.id);

  return (
    <div className="ProductPage">
      <ProductCollage images={product.images} />
      <ProductDetails
        name={product.title}
        price={product.variants[0].prices[0].amount}
      />
    </div>
  );
}
