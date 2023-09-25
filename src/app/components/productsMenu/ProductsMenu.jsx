import { productsListing } from "@/data/products-listing";

export default function ProductsMenu() {
  return (
    <div className="ProductsMenu">
      <div className="ProductsMenu__categories">
        {productsListing.map((category) => (
          <div key={category.id}>
            {category.id}
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
