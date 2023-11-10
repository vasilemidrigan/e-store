import ProductTitle from "src/components/productPage/productTitle/ProductTitle";
import ProductCollage from "src/components/productPage/productCollage/ProductCollage";
import ProductDescription from "src/components/productPage/productDescription/ProductDescription";
import ProductDetails from "src/components/productPage/productDetails/ProductDetails";

export default function ProductPage() {
  return (
    <div className="ProductPage">
      <div className="ProductPage__overview">
        <ProductTitle />
        <ProductCollage />
        <ProductDescription />
      </div>
      <ProductDetails />
    </div>
  );
}
