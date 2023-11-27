"use client";

import { useRef, useContext } from "react";

import { IsMenuActiveContext } from "src/context/providers";

export default function NavMenuBtn({ children }) {
  const { isMenuActive, setIsMenuActive } = useContext(IsMenuActiveContext);
  const ref = useRef(false);

  function onClickOutsideMenu(event) {
    if (event.code === "Escape" || event.type === "click") {
      document.removeEventListener("keydown", onClickOutsideMenu);
      document.removeEventListener("click", onClickOutsideMenu);
      setIsMenuActive((prevValue) => (prevValue ? false : true));
      ref.current = false;
    }
  }

  const onClickMenu = () => {
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
