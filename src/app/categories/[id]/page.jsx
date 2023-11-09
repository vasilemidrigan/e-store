import CategoryIllustration from "@/components/categoryIllustration/CategoryIllustration";
import ProductCard from "@/components/productCard/ProductCard";
import Pagination from "@/components/pagination/Pagination";

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
