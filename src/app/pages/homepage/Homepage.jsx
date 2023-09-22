import ImageCarousel from '../../components/imageCarousel/ImageCarousel'
import HomepageGrid from "../../components/homepageGrid/HomepageGrid"

export default function Homepage() {
  return (
    <div className="Homepage">
      <ImageCarousel/>
      <HomepageGrid/>
    </div>
  )
}