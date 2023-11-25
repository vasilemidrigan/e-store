import TextCard from "src/components/home/imageCarousel/textCard/TextCard";
import ControlArrows from "../controls/ControlArrows";

export default function ImageCard(props) {
  return (
    <div className="ImageCard">
      <img src={props.img.src} className="ImageCard__img" alt={props.img.alt} />
      <ControlArrows />
      <TextCard />
    </div>
  );
}
