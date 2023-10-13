"use client";

import ImageCarousel from "@/components/home/imageCarousel/ImageCarousel";
import HomepageGrid from "@/components/home/homeGrid/HomeGrid";

export default function Home() {
  return (
    <div className="Homepage">
      <ImageCarousel />
      <HomepageGrid />
    </div>
  );
}
