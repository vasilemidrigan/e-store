import ImageCarousel from '@/components/homepage/imageCarousel/ImageCarousel'
import HomepageGrid from "@/components/homepage/homepageGrid/HomepageGrid"

export default function Homepage() {
  return (
    <div className="Homepage">
      <ImageCarousel/>
      <HomepageGrid/>
    </div>
  )
}