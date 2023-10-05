import Logo from "@/components/globals/Logo";
import MenuBtn from "./subcomponents/MenuBtn";
import SearchBar from "./subcomponents/SearchBar";

export default function Nav() {
  function catchClick(e) {
    if (
      e.target.classList.contains('MenuBtn') || e.target.classList.contains('MenuBtn__text')
    ) {
      const productsMenu =
        e.currentTarget.nextElementSibling.nextElementSibling;
      productsMenu.classList.toggle("active");
    }
  }

  return (
    <div className="Navigation" onClick={(e) => catchClick(e)}>
      <div className="Navigation__elements-wrapper">
        <Logo />
        <MenuBtn />
        <SearchBar />
      </div>
    </div>
  );
}
