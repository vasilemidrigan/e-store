"use client";

import Image from "next/image";
import noImage from "@/public/icons/placeholders/no-image.jpg";

export default function CategoryIllustration({
  categoryName,
  categoryIllustrationImage,
}) {
  return (
    <div className="CategoryIllustration">
      <h2 className="CategoryIllustration__header">{categoryName}</h2>
      <div className="CategoryIllustration__img-wrapper">
        {categoryIllustrationImage && (
          <Image
            src={
              categoryIllustrationImage
                ? categoryIllustrationImage
                : noImage.src
            }
            alt="two smartphones"
            fill
            sizes="(min-width: 81.25rem) 100vw"
            priority
          />
        )}
      </div>
    </div>
  );
}
