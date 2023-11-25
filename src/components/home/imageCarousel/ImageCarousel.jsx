"use client";

import { useState } from "react";

import ImageCard from "./imageCard/ImageCard";
import ControlsBar from "./controls/ControlsBar";

import { imageCarousel } from "@/data/image-carousel";

export default function ImageCarousel() {
  const [images, setImages] = useState(imageCarousel);
  const [activeId, setActiveId] = useState(1);

  let activeImg = images.filter((img) => img.id == activeId);

  return (
    <div className="ImageCarousel">
      <ImageCard img={activeImg[0]} />
      <ControlsBar activeId={activeId} setActiveId={setActiveId} />
    </div>
  );
}
