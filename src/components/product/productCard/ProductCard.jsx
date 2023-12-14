import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ name, id, price, image }) {
  return (
    <Link href={`/product/${id}`}>
      <div className="ProductCard">
        <div className="ProductCard__photo-wrapper">
          <Image src={image} alt={"product photo"} fill objectFit="contain" />
        </div>
        <div className="ProductCard__id">{name}</div>
        <div className="ProductCard__price">{price}</div>
      </div>
    </Link>
  );
}
