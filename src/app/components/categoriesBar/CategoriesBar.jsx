import CategoryIcon from "./CategoryIcon/CategoryIcon";
import { CATEGORIES_ICONS } from "@/data/hardcoded-data/CATEGORIES_ICONS";

export default function CategoriesBar() {
  return (
    <div className="CategoriesBar">
      <div className="CategoriesBar__wrapper">
        {CATEGORIES_ICONS.map((category) => (
          <CategoryIcon
            key={category.id}
            category={category.category}
            src={category.src}
          />
        ))}
      </div>
    </div>
  );
}
