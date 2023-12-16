"use client";

import Image from "next/image";

export default function CategoryIllustration({ categoryIllustrationImage }) {
  return (
    <div className="CategoryIllustration">
      <h2 className="CategoryIllustration__header">Smartphones</h2>
      <div className="CategoryIllustration__img-wrapper">
        {/* <Image src={categoryIllustrationImage} alt="two smartphones" fill /> */}
        <Image
          src={categoryIllustrationImage}
          alt="two smartphones"
          fill
          sizes="(min-width: 81.25rem) 100vw"
          priority
        />
      </div>
    </div>
  );
}
