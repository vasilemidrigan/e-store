import ControlBtn from "./ControlBtn";
import { carouselBtns } from "@/data/carousel-btns";

export default function ControlsBar({
  activeStates: { activeId, setActiveId },
}) {
  return (
    <div className="ControlsBar">
      <div className="ControlsBar__btns-wrapper">
        {carouselBtns.map((btn) => (
          <ControlBtn
            key={btn.id}
            activeStates={{
              id: btn.id,
              activeId: activeId,
              setActiveId: setActiveId,
            }}
          />
        ))}
      </div>
    </div>
  );
}
