/*
  There is no reason to move pagination into layout, as the layout will not 
  re-render between changing pages probably. 

  It seems like Next.js Templates is more suitable for pagination, as
  they re-render when there is a change. https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

  Need to check this when implementing pagination. 
*/

import { v4 } from "uuid";

import CategoryIllustration from "@/components/category/categoryIllustration/CategoryIllustration";
import ProductCard from "@/components/product/productCard/ProductCard";
import Pagination from "@/components/globals/pagination/Pagination";
import {
  getAllProductsFromAPI,
  getCategoryByName,
  getProductsByCategoryFromAPI,
} from "src/lib/api";

export default async function CategoryPage({ params, searchParams }) {
  const categoryArr = [];
  const { id: categoryId } = await getCategoryByName(params.id);
  categoryArr.push(categoryId);

  const products = await getProductsByCategoryFromAPI(categoryArr);

  // const products = await getProductsByCategoryName(
  //   params.id,
  //   searchParams?.page
  // );

  // const categoryIllustrationImage = await getImageByName(
  //   "category-illustration",
  //   params.id
  // );

  return (
    <div className="CategoryPage">
      {/* <CategoryIllustration
        categoryIllustrationImage={categoryIllustrationImage[0]}
      /> */}
      <div className="CategoryPage__grid">
        {products?.map((product) => (
          <ProductCard
            key={v4()}
            name={product.subtitle}
            id={product.id}
            price={product.variants[0].prices.amount}
            image={product.thumbnail}
            // nr={product.meta.nr}
          />
        ))}
      </div>
      {/* <div className="CategoryPage__pagination">
        <Pagination page={searchParams.page || 1} metadata={metadata} />
      </div> */}
    </div>
  );
}
