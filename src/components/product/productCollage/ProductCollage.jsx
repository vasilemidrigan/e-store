import Image from "next/image";

import { v4 } from "uuid";

import noImage from "@/public/icons/placeholders/no-image.png";

export default function ProductCollage({ images }) {
  return (
    <div className="ProductCollage">
      {images &&
        images.map((img) => (
          <div
            key={v4()}
            className={`ProductCollage__photo ProductCollage__photo-${images.indexOf(
              img
            )}`}
          >
            <Image
              src={img.url ? img.url : noImage.src}
              fill
              sizes="(min-width: 81.25rem) 100vw"
              alt="product photo"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
    </div>
  );
}
