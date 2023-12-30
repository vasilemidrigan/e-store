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
  getCategoryByNameFromMedusa,
  getProductsByCategoryFromMedusa,
} from "src/lib/api";

import { S3_CATEGORY_ILLUSTRATION_URL } from "@/data/s3-endpoints";

async function fetchData(category) {
  const response = await fetch(
    `${S3_CATEGORY_ILLUSTRATION_URL}/${category}.jpg`
  );
  return response.url;
}

export default async function CategoryPage({ params, searchParams }) {
  const categoryArr = [];
  const { id: categoryId } = await getCategoryByNameFromMedusa(params.id);
  categoryArr.push(categoryId);
  const products = await getProductsByCategoryFromMedusa(
    categoryArr,
    searchParams.page
  );

  const categoryIllustrationImage = await fetchData(params.id);

  console.log("#####################################################");
  console.log("############ CategoryPage - params ##################");
  console.log("#####################################################");
  console.log(params);
  console.log("#####################################################");
  console.log("#####################################################");
  console.log("#####################################################");
  console.log("");

  console.log("#####################################################");
  console.log("########## CategoryPage - searchParams ##############");
  console.log("#####################################################");
  console.log(searchParams);
  console.log("#####################################################");
  console.log("#####################################################");
  console.log("#####################################################");
  console.log("");

  console.log("#####################################################");
  console.log("############ CategoryPage - products ################");
  console.log("#####################################################");
  console.log(products);
  console.log("#####################################################");
  console.log("#####################################################");
  console.log("#####################################################");
  console.log("");

  return (
    <div className="CategoryPage">
      <CategoryIllustration
        categoryIllustrationImage={categoryIllustrationImage}
      />
      <div className="CategoryPage__grid">
        {products.products?.map((product) => (
          <ProductCard
            key={v4()}
            name={product.title}
            id={product.id}
            price={product.variants[0].prices[0].amount}
            image={product.thumbnail}
          />
        ))}
      </div>
      <div className="CategoryPage__pagination">
        <Pagination
          page={searchParams.page || 1}
          metadata={{
            count: products.count,
            limit: products.limit,
            offset: products.offset || 1,
          }}
        />
      </div>
    </div>
  );
}
