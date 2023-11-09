import { getAllCategories } from "src/utils/api";
import NavMenuBtn from "./navMenuBtn/NavMenuBtn";
import NavMenu from "./navMenu/NavMenu";

export async function NavMenuWrapper() {
  const categories = await getAllCategories();
  
  return (
    <NavMenuBtn>
      <NavMenu categories={categories}/>
    </NavMenuBtn>
  );
}
