"use client";

import { useState } from "react";

import ImageCard from "../imageCard/ImageCard";
import ControlsBar from "../controls/ControlsBar";

export default function ImageCarouselClient({ images }) {
  const [activeId, setActiveId] = useState(1);

  let activeImg = images.filter((img) => img.meta[1].id == activeId);

  return (
    <div className="ImageCarouselClient">
      <ImageCard data={{ activeId, setActiveId, activeImg: activeImg[0] }} />
      <ControlsBar activeStates={{ activeId, setActiveId }} />
    </div>
  );
}
