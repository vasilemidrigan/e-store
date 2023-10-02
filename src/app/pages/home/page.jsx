'use client';

import ImageCarousel from '@/components/home/imageCarousel/ImageCarousel'
import HomepageGrid from "@/components/home/homeGrid/HomeGrid"

export default function Homepage() {
  return (
    <div className="Homepage">
      <ImageCarousel/>
      <HomepageGrid/>
    </div>
  )
}