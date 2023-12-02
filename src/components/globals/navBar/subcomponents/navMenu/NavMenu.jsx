import { v4 } from "uuid";
import Link from "next/link";

import { getAllCategoriesFromAPI } from "src/lib/api";

import closeIcon from "@/public/icons/menu/close.png";

export default async function NavMenu() {
  const categories = await getAllCategoriesFromAPI();

  return (
    <div className="NavMenu">
      <ul className="NavMenu__categories">
        {categories?.map((category) => (
          <li key={v4()} className="NavMenu__category">
            <Link href={`/category/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <img className="NavMenu__close" src={closeIcon.src} alt="" />
    </div>
  );
}
