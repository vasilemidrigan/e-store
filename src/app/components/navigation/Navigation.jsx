import Logo from "../globals/Logo"
import MenuBtn from "./subcomponents/MenuBtn"
import SearchBar from "./subcomponents/SearchBar"

export default function Nav() {
  return (
    <div className="Navigation">
      <div className="Navigation__elements">
        <Logo/>
        <MenuBtn/>
        <SearchBar/>
      </div>
    </div>
  )
}