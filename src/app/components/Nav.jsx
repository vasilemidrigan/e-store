import Logo from "../ui/nav-elements/Logo"
import MenuBtn from "../ui/nav-elements/MenuBtn"
import SearchBar from "../ui/nav-elements/SearchBar"

export default function Nav() {
  return (
    <div className="Nav">
      <div className="Nav__elements-wrapper">
        <Logo/>
        <MenuBtn/>
        <SearchBar/>
      </div>
    </div>
  )
}