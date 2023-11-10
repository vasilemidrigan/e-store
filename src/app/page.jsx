import ImageCarousel from "src/components/home/imageCarousel/ImageCarousel";
import HomeGrid from "src/components/home/homeGrid/HomeGrid";

export default function HomePage() {
  return (
    <div className="Homepage">
      <ImageCarousel />
      <HomeGrid />
    </div>
  );
}
