export default function CategoryIcon(props) {
  return (
    <div className="CategoryIcon">
        <img src={props.src} className={`CategoryIcon__img ${props.category}`} alt={`${props.category} icon`} />
        <span className="CategoryIcon__description">{props.category}</span>
    </div>
  )
}