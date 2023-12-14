import ImageCarouselClient from "@/components/home/imageCarousel/imageCarouselClient/ImageCarouselClient";
import { getImagesForImageCarouselFromS3 } from "src/lib/api";

export default async function ImageCarousel() {
  const images = await getImagesForImageCarouselFromS3();

  return (
    <>
      <ImageCarouselClient images={images} />
    </>
  );
}
