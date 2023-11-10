/*
  When open the application, the component is hidden. 

  When opening a category page, the component should render some specific 
  brands, for example: 
  categoryPage: Smartphones
  categoriesBar: Sony, Iphone, Xiaomi, Samsung
*/

import CategoryIcon from "./CategoryIcon/CategoryIcon";
import { CATEGORIES_ICONS } from "src/constants/CATEGORIES_ICONS";

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
