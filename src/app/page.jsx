"use client";

import ImageCarousel from "@/components/home/imageCarousel/ImageCarousel";
import HomepageGrid from "@/components/home/homeGrid/HomeGrid";

import { deleteItemsFromDb } from "src/utils/api";

export default function Home() {
  // deleteItemsFromDb();
  return (
    <div className="Homepage">
      <ImageCarousel />
      <HomepageGrid />
    </div>
  );
}
