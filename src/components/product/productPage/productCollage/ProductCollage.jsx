import mainPhoto from "@/public/images/desktop-version/smartphones/main-photo.png";
import secondPhoto from "@/public/images/desktop-version/smartphones/second-photo.png";

export default function ProductCollage() {
  return (
    <>
      <div className="ProductCollage">
        <div className="ProductCollage__main-photo">
          <img src={mainPhoto.src} alt="smartphone" />
        </div>
        <div className="ProductCollage__photo-1">
          <img src={secondPhoto.src} alt="smartphone" />
        </div>
        <div className="ProductCollage__photo-2">
          <img src={secondPhoto.src} alt="smartphone" />
        </div>
        <div className="ProductCollage__photo-3">
          <img src={secondPhoto.src} alt="smartphone" />
        </div>
      </div>
      <hr className="hr-thin" />
    </>
  );
}
