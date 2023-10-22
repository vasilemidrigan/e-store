import { useState } from "react";

import { productsListing } from "src/data/hardcoded-data/products-listing";

export default function ProductsMenu() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  return (
    <div className="ProductsMenu">
      <div className="ProductsMenu__categories">
        {productsListing.map((category) => (
          <div className="ProductsMenu__category" key={category.category}>
            {category.category}
          </div>
        ))}
      </div>
      <div className="ProductsMenu__subcategories">
        <div className="ProductsMenu__subcategory-wrapper">
          <span className="ProductsMenu__subcategory">Subcategory-A</span>
          <ul className="ProductsMenu__items">
            <li>item a</li>
            <li>item b</li>
            <li>item c</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
