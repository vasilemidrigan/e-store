/*
  There is no reason to move pagination into layout, as the layout will not 
  re-render between changing pages probably. 

  It seems like Next.js Templates is more suitable for pagination, as
  they re-render when there is a change. https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

  Need to check this when implementing pagination. 
*/

import { v4 as uuid } from "uuid";

import ProductCard from "@/components/product/productCard/ProductCard";
import Pagination from "@/components/globals/pagination/Pagination";

import { getProductsByCategoryName } from "src/utils/api";

export default async function CategoryPage({ params }) {
  const { data: products } = await getProductsByCategoryName(params.id);

  return (
    <div className="CategoryPage">
      <div className="CategoryPage__grid">
        {products.map((product) => (
          <ProductCard key={uuid()} name={product.name} price={product.price} />
        ))}
      </div>
      <div className="CategoryPage__pagination">
        <Pagination />
      </div>
    </div>
  );
}
