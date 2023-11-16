import { v4 } from "uuid";
import Link from "next/link";
import { getAllCategories } from "src/utils/api";

export default async function NavMenu() {
  const { data: categories } = await getAllCategories();

  return (
    <div className="NavMenu">
      <ul className="NavMenu__categories">
        {categories?.map((cat) => (
          <li key={v4()} className="NavMenu__category">
            <Link href={`/category/${cat.name}`} prefetch={true}>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
