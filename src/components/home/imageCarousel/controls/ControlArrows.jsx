import arrow from "@/public/icons/image-carousel/arrow.png";

export default function ControlArrows() {
  return (
    <div className="ControlArrows">
      <img className="ControlArrows__img" src={arrow.src} alt="arrow left" />
      <img className="ControlArrows__img" src={arrow.src} alt="arrow right" />
    </div>
  );
}
