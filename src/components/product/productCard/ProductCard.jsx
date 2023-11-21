import Link from "next/link";

export default function ProductCard({ name, price, image, nr }) {
  return (
    <Link href={`/product/${name}`}>
      <div className="ProductCard">
        <div className="ProductCard__photo">
          <img src={image} alt="smartphone photo" />
        </div>
        <div className="ProductCard__id">
          {name} {nr}
        </div>
        <div className="ProductCard__price">{price.formatted_with_symbol}</div>
      </div>
    </Link>
  );
}
