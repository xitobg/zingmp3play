import React from "react"
import Search from "./Search"
import NavAvatar from "./NavAvatar"
import NavButtons from "./NavButtons"
import NavLinks from "./NavLinks"
import ContextMenu from "./ContextMenu"

const Navbar: React.FC = () => {
  return (
    <nav
      className="
        flex
        justify-between
        items-center
        bg-[color:var(--color-navbar-bg)]
        h-16
        px-[10vw]
        top-0
        bottom-0
        right-0
        left-0
        fixed
        z-50
        backdrop-blur-[20px]
        backdrop-saturate-[180%]
      "
    >
      {/* Navigation Buttons */}
      <NavButtons />

      {/* Navigation Links */}
      <div className="flex">
        <NavLinks toLink="/zingchart" titleLink="ZingChart"/>
        <NavLinks toLink="/top100" titleLink="Top100"/>
        <NavLinks toLink="/mv" titleLink="MV"/>
      </div>

      {/* Right Part */}
      <div className="flex items-center">
        {/* search-box */}
        <Search />
        {/* Avatar */}
        <NavAvatar />
      </div>
      {/* Context Menu */}
      <ContextMenu />
    </nav>
  )
}

export default Navbar
