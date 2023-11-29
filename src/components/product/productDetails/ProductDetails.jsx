export default function ProductDetails({ name, price }) {
  return (
    <div className="ProductDetails">
      <h1 className="ProductDetails__name">{name}</h1>
      <div className="ProductDetails__price">
        <span>{price.formatted_with_symbol}</span>
      </div>
    </div>
  );
}
