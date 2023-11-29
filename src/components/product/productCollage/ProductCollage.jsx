import Image from "next/image";
import { v4 } from "uuid";

export default function ProductCollage({ images }) {
  return (
    <div className="ProductCollage">
      {images && images.map((img) => (
        <div
          key={v4()}
          className={`ProductCollage__photo ProductCollage__photo-${images.indexOf(img)}`}
        >

          <Image src={img.url} alt="product photo" fill objectFit="contain" />
        </div>
      ))}
    </div>
  );
}
