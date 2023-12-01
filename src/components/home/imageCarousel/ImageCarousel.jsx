import ImageCarouselClient from "@/components/home/imageCarousel/imageCarouselClient/ImageCarouselClient";

export default async function ImageCarousel() {
  const images = await getImagesByType("image-carousel");

  console.log('IMAGES ARE: ', images)

  return (
    <>
      <ImageCarouselClient images={images} />
    </>
  );
}
