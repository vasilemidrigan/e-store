import { createContext } from "react";

export const IsMenuActive = createContext(null);

export default function ActiveStatesContext({children, isMenuActive}) {
  return (
    <IsMenuActive.Provider value={isMenuActive}>
      {children}
    </IsMenuActive.Provider>
  )
}

