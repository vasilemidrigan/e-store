import Link from "next/link";
import Image from "next/image";

import noImage from "@/public/icons/placeholders/no-image.png";

export default function ProductCard({ name, id, price, image }) {
  return (
    <Link href={`/product/${id}`}>
      <div className="ProductCard">
        <div className="ProductCard__photo-wrapper">
          <Image
            src={image ? image : noImage.src}
            alt="product photo"
            fill
            sizes="(min-width: 81.25rem) 100vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="ProductCard__id">{name}</div>
        <div className="ProductCard__price">{price} $</div>
      </div>
    </Link>
  );
}
