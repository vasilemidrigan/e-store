import ImageCarouselClient from "@/components/home/imageCarousel/imageCarouselClient/ImageCarouselClient";
import getImageCarouselAssets from "src/lib/api";

export default async function ImageCarousel() {
  const images = await getImageCarouselAssets();

  return (
    <>
      <ImageCarouselClient images={images} />
    </>
  );
}
