import Link from "next/link";

export default function CategoryIcon(props) {
  return (
    <Link href="/pages/product-listing">
      <div className="CategoryIcon">
        <img
          src={props.src}
          className={`CategoryIcon__img ${props.category}`}
          alt={`${props.category} icon`}
        />
        <span className="CategoryIcon__description">{props.category}</span>
      </div>
    </Link>
  );
}
