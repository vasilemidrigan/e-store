import ControlBtn from "./ControlBtn";
import { CAROUSEL_BTNS } from "@/data/carousel-btns";

export default function ControlsBar({
  activeStates: { activeId, setActiveId },
}) {
  return (
    <div className="ControlsBar">
      <div className="ControlsBar__btns-wrapper">
        {CAROUSEL_BTNS.map((btn) => (
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
