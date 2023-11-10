import Link from "next/link";

import smartphone from "@/public/images/desktop-version/smartphones/green-smartphone.png";

export default function ProductCard({ name, price }) {
  return (
    <Link href={`/product/${name}`}>
      <div className="ProductCard">
        <div className="ProductCard__photo">
          <img src={smartphone.src} alt="smartphone photo" />
        </div>
        <div className="ProductCard__id">{name}</div>
        <div className="ProductCard__price">{price.formatted_with_symbol}</div>
      </div>
    </Link>
  );
}
