"use client";

import { useState } from "react";

export default function ProductsMenu() {
  const [isProductsMenuActive, setIsProductsMenuActive] = useState(false);

  const handleProductsMenu = () => {
    setIsProductsMenuActive((prevValue) => (prevValue ? false : true));
  };

  return (
    <div className="ProductsMenu">
      <ul className="ProductsMenu__categories">
        <li className="ProductsMenu__category" onClick={handleProductsMenu}>
          category
        </li>
        <li className="ProductsMenu__category" onClick={handleProductsMenu}>
          category
        </li>
        <li className="ProductsMenu__category" onClick={handleProductsMenu}>
          category
        </li>
        <li className="ProductsMenu__category" onClick={handleProductsMenu}>
          category
        </li>
        <li className="ProductsMenu__category" onClick={handleProductsMenu}>
          category
        </li>
      </ul>
    </div>
  );
}
