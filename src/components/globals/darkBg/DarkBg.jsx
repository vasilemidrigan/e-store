"use client";

import { useContext } from "react";
import { IsMenuActiveContext } from "src/context/providers";

export default function DarkBg() {
  const { isMenuActive } = useContext(IsMenuActiveContext);

  return <div className={`DarkBg ${isMenuActive ? "" : "hidden"}`}></div>;
}
