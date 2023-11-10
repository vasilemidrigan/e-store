import ProductTitle from "@/components/product/productPage/productTitle/ProductTitle";
import ProductCollage from "@/components/product/productPage/productCollage/ProductCollage";
import ProductDescription from "@/components/product/productPage/productDescription/ProductDescription";
import ProductDetails from "@/components/product/productPage/productDetails/ProductDetails";

export default function ProductPage({ params }) {
  console.log(params.id);
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
