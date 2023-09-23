import TextCard from '@/components/imageCarousel/textCard/TextCard';

export default function ImageCard(props) { 
  return (
    <div className="ImageCard">
      <img src={props.img.src} className="ImageCard__img" alt={props.img.alt} />
      <TextCard/>
    </div>
  )
}