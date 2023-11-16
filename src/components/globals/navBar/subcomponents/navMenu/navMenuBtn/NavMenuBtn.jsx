"use client";

import { useState } from "react";
import { useRef } from "react";
import { assetsURL, productsURL } from "src/api/endpoints";
import { initialProductsData } from "src/api/initial-products";
import {
  deleteEntireClassFromAPI,
  getEntireClassFromAPI,
  getFirstPageFromClassInAPI,
} from "src/utils/api";
import {
  addAllProductsToAPI,
  assignAssetsToAllProducts,
  assignCategoriesToAllProducts,
} from "src/utils/initialize-api";

export default function NavMenuBtn({ children }) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const ref = useRef(false);

  // addAllProductsToAPI(initialProductsData);
  // assignAssetsToAllProducts();
  // deleteEntireClassFromAPI(productsURL);
  // getEntireClassFromAPI(getFirstPageFromClassInAPI, productsURL);
  // assignCategoriesToAllProducts();

  function onClickOutsideMenu(event) {
    if (event.code === "Escape" || event.type === "click") {
      document.removeEventListener("keydown", onClickOutsideMenu);
      document.removeEventListener("click", onClickOutsideMenu);
      setIsMenuActive((prevValue) => (prevValue ? false : true));
      ref.current = false;
    }
  }

  const onClickMenu = (event) => {
    if (!ref.current) {
      ref.current = true;
      document.addEventListener("click", onClickOutsideMenu);
      document.addEventListener("keydown", onClickOutsideMenu);
      setIsMenuActive((prevValue) => (prevValue ? false : true));
    }
  };

  return (
    <>
      <div className="NavMenuBtn" onClick={onClickMenu}>
        <span className="NavMenuBtn__text">Products</span>
      </div>
      {isMenuActive ? children : null}
    </>
  );
}
