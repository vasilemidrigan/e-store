import arrow from "@/public/icons/image-carousel/arrow.png";

export default function ControlArrows({
  activeStates: { imgId, setActiveId },
}) {
  return (
    <div className="ControlArrows">
      <img
        className="ControlArrows__img"
        onClick={() => setActiveId(imgId == 1 ? +imgId + 2 : +imgId - 1)}
        src={arrow.src}
        alt="arrow left"
      />
      <img
        className="ControlArrows__img"
        onClick={() => setActiveId(imgId == 3 ? +imgId - 2 : +imgId + 1)}
        src={arrow.src}
        alt="arrow right"
      />
    </div>
  );
}
