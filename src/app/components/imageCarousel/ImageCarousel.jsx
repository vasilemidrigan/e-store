import ImageCard from "./imageCard/ImageCard"
import ControlsBar from "./carouselControls/ControlsBar"

export default function ImageCarousel() {
  return (
    <div className="ImageCarousel">
       <ImageCard/>
       <ControlsBar/>
    </div>
  )
}