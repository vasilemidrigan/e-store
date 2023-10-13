import CategoryIllustration from "@/components/categoryIllustration/CategoryIllustration";
import ProductCard from "@/components/productCard/ProductCard";
import Pagination from "@/components/pagination/Pagination";


export default function ProductListing() {
  return (
    <div className="ProductListing">
      <CategoryIllustration/>
      <div className="ProductListing__grid">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
      </div>
      <div className="ProductListing__pagination">
        <Pagination/>
      </div>
    </div>
  )
}