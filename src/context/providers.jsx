"use client";

import { useState, createContext } from "react";

export const IsMenuActiveContext = createContext(false);

export const MenuContext = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <IsMenuActiveContext.Provider value={{ isMenuActive, setIsMenuActive }}>
      {children}
    </IsMenuActiveContext.Provider>
  );
};
