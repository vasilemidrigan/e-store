import { v4 } from "uuid";

export default function ProductCollage({ images }) {
  const productImages = images.map((img) => (
    <div key={v4()} className={`ProductCollage__photo-${images.indexOf(img)}`}>
      <img src={img.url} alt="image" />
    </div>
  ));

  return (
    <>
      <div className="ProductCollage">{productImages}</div>
      <hr className="hr-thin" />
    </>
  );
}
