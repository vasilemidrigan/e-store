import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ name, price, image, nr }) {
  return (
    <Link href={`/product/${name}`}>
      <div className="ProductCard">
        <div className="ProductCard__photo-wrapper">
          <Image src={image} alt={"product photo"} fill objectFit="contain" />
        </div>
        <div className="ProductCard__id">
          {name} {nr}
        </div>
        <div className="ProductCard__price">{price.formatted_with_symbol}</div>
      </div>
    </Link>
  );
}
