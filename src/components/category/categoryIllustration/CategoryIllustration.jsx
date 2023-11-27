"use client";

import Image from "next/image";

export default function CategoryIllustration({ categoryIllustrationImage }) {
  console.log("image is: ", categoryIllustrationImage);

  return (
    <div className="CategoryIllustration">
      <h2 className="CategoryIllustration__header">Smartphones</h2>
      <Image src={categoryIllustrationImage.url} alt="two smartphones" fill />
    </div>
  );
}
