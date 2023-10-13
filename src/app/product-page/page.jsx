import ProductTitle from "@/components/productPage/productTitle/ProductTitle";
import ProductCollage from "@/components/productPage/productCollage/ProductCollage";
import ProductDescription from "@/components/productPage/productDescription/ProductDescription";
import ProductDetails from "@/components/productPage/productDetails/ProductDetails";

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
