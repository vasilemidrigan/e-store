import { v4 as uuid } from "uuid";

export default async function NavMenu(props) {
  const categories = props.categories.data;
  
  return (
    <div className="NavMenu">
      <ul className="NavMenu__categories">
        {categories?.map((cat) => (
          <li key={uuid()}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}
