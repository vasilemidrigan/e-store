"use client";

import { useState } from "react";

import Logo from "@/components/globals/Logo";
import MenuBtn from "./subcomponents/menuBtn/MenuBtn";
import SearchBar from "./subcomponents/searchBar/SearchBar";
import ProductsMenu from "./subcomponents/productsMenu/ProductsMenu";

export default function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenu = () =>
  setIsMenuActive((prevValue) => (prevValue ? false : true));

  return (
    <>
      <div className="Navigation">
        <div className="Navigation__elements-wrapper">
          <Logo />
          <MenuBtn handleMenu={{ isMenuActive, handleMenu }} />
          <SearchBar />
        </div>
      </div>
      {isMenuActive && <ProductsMenu />}
    </>
  );
}
