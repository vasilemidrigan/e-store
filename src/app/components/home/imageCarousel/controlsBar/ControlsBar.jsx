import ControlBtn from "./ControlBtn";
import { carouselBtns } from "src/data/hardcoded-data/carousel-btns";

export default function ControlsBar(props) {
  return (
    <div className="ControlsBar">
      <div className="ControlsBar__btns-wrapper">
        {carouselBtns.map((btn) => (
          <ControlBtn
            key={btn.id}
            id={btn.id}
            activeId={props.activeId}
            setActiveId={props.setActiveId}
          />
        ))}
      </div>
    </div>
  );
}
