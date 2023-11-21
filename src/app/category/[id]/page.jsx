/*
  There is no reason to move pagination into layout, as the layout will not 
  re-render between changing pages probably. 

  It seems like Next.js Templates is more suitable for pagination, as
  they re-render when there is a change. https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

  Need to check this when implementing pagination. 
*/

import { v4 } from "uuid";

import ProductCard from "@/components/product/productCard/ProductCard";
import Pagination from "@/components/globals/pagination/Pagination";

import { getProductsByCategoryName } from "src/lib/api";

export default async function CategoryPage({ params, searchParams }) {
  const { products, metadata } = await getProductsByCategoryName(
    params.id,
    searchParams?.page
  );

  return (
    <div className="CategoryPage">
      <div className="CategoryPage__grid">
        {products?.map((product) => (
          <ProductCard
            key={v4()}
            name={product.name}
            price={product.price}
            image={product.image?.url}
            nr={product.meta.nr}
          />
        ))}
      </div>
      <div className="CategoryPage__pagination">
        <Pagination page={searchParams.page || 1} metadata={metadata} />
      </div>
    </div>
  );
}
