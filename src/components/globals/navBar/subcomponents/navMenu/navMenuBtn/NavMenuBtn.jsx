"use client";

import { useState } from "react";

export default function NavMenuBtn({ children }) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const onClickMenu = () => {
    setIsMenuActive((prevValue) => (prevValue ? false : true));
  };

  return (
    <>
      <div className="NavMenuBtn">
        <span className="NavMenuBtn__text" onClick={onClickMenu}>
          Products
        </span>
      </div>
      {isMenuActive ? children : null}
    </>
  );
}
