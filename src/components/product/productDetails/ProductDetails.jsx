export default function ProductDetails({ name, price }) {
  return (
    <div className="ProductDetails">
      <div className="ProductDetails__name">{name}</div>
      <div className="ProductDetails__price">
        {price.formatted_with_symbol}
      </div>
    </div>
  );
}
