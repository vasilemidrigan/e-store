import ControlArrows from "../controls/ControlArrows";

export default function ImageCard({
  data: { activeId, setActiveId, activeImg },
}) {
  return (
    <div className="ImageCard">
      <img src={activeImg.url} className="ImageCard__img" alt="img" />
      <ControlArrows
        activeStates={{ imgId: activeImg.meta[1].id, activeId, setActiveId }}
      />
    </div>
  );
}
