"use client";

import Image from "next/image";

export default function CategoryIllustration({ categoryIllustrationImage }) {
  return (
    <div className="CategoryIllustration">
      <h2 className="CategoryIllustration__header">Smartphones</h2>
      <div className="CategoryIllustration__img-wrapper">
        <Image src={categoryIllustrationImage} alt="two smartphones" fill />
      </div>
    </div>
  );
}
