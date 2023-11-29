export default function ProductDetails({ price }) {
  return (
    <div className="ProductDetails">
      <div className="ProductDetails__price">
        <span>{price.formatted_with_symbol}</span>
      </div>
    </div>
  );
}
