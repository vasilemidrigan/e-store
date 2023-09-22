import TextCard from "../textCard/TextCard"

import appleImg from '../../../../../public/images/desktop-version/image-carousel/apple-electronics.jpg';
// import headphonesImg from '../../../../../public/images/desktop-version/image-carousel/headphones.jpg';

export default function ImageCard() {
  return (
    <div className="ImageCard">
      <img src={appleImg.src} className="ImageCard__img" alt="apple laptop and mice, and an iphone on table" />
      <TextCard/>
    </div>
  )
}