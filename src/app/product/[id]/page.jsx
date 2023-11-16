import ProductName from "@/components/product/productPage/productName/ProductName";
import ProductCollage from "@/components/product/productPage/productCollage/ProductCollage";
import ProductDescription from "@/components/product/productPage/productDescription/ProductDescription";
import ProductDetails from "@/components/product/productPage/productDetails/ProductDetails";
import { getImagesByProductName, getProductFromAPI } from "src/utils/api";

export default async function ProductPage({ params }) {
  const product = await getProductFromAPI(params.id);
  const productImages = await getImagesByProductName(product.name);
  console.log(productImages);
  return (
    <div className="ProductPage">
      <div className="ProductPage__overview">
        <ProductName name={product.name} />
        <ProductCollage images={productImages} />
        <ProductDescription price={product.price} />
      </div>
      <ProductDetails />
    </div>
  );
}
