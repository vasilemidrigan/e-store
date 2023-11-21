export default function ProductName({ name, nr }) {
  console.log(name, nr);
  return (
    <div className="ProductName">
      <span>{name}</span>
      <span>NR: {nr}</span>
      <hr className="hr-thin" />
    </div>
  );
}
