import Logo from "./subcomponents/Logo"
import MenuBtn from "./subcomponents/MenuBtn"
import SearchBar from "./subcomponents/SearchBar"

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