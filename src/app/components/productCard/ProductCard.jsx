import Link from "next/link";

import smartphone from "@/public/images/desktop-version/smartphones/green-smartphone.png";

export default function ProductCard() {
  return (
    <Link href="/product-page">
      <div className="ProductCard">
        <div className="ProductCard__photo">
          <img src={smartphone.src} alt="smartphone photo" />
        </div>
        <div className="ProductCard__id">Smartphone S8</div>
        <div className="ProductCard__price">376$</div>
      </div>
    </Link>
  );
}
