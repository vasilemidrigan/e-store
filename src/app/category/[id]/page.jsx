import CategoryIllustration from "src/components/categoryIllustration/CategoryIllustration";
import ProductCard from "src/components/productCard/ProductCard";
import Pagination from "src/components/pagination/Pagination";

export default function CategoryPage() {
  return (
    <div className="CategoryPage">
      <CategoryIllustration />
      <div className="CategoryPage__grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="CategoryPage__pagination">
        <Pagination />
      </div>
    </div>
  );
}
