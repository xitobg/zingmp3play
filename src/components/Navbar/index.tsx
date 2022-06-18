import React, { useState } from "react"
import Search from "./SearchBox"
import NavArrows from "./NavArrows"
import NavLinks from "./NavLinks"
import IconSetting from "../Icons/Setting"
import IconLogin from "../Icons/Login"
import IconGithub from "../Icons/Github"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {

  // Style Item Context Menu
  const styleItemsContextMenu = `
    flex
    items-center
    font-semibold
    px-[5px]
    py-[8px]
    rounded-[8px]
    hover:bg-[color:var(--color-primary-bg-for-transparent)]
  `

  const [isContextMenuActive, setContextMenuActive] = useState<boolean>(false)

  const handleToggleContextMenu = () => {
    setContextMenuActive(!isContextMenuActive)
  }

  return (
    <nav
      className="
        flex
        justify-between
        items-center
        bg-[color:var(--color-navbar-bg)]
        h-16
        px-[10vw]
        inset-0
        fixed
        z-50
        backdrop-blur-[20px]
        backdrop-saturate-[180%]
      "
    >
      {/* Navigation Buttons Arrow */}
      <NavArrows />
      {/* End Navigation Buttons Arrow */}

      {/* Navigation Links */}
      <div className="flex">
        <NavLinks toLink="/zingchart" titleLink="ZingChart" />
        <NavLinks toLink="/top100" titleLink="Top100" />
        <NavLinks toLink="/mv" titleLink="MV" />
      </div>
      {/* End Navigation Links */}

      {/* Right Part */}
      <div className="flex items-center">

        {/* Search Box */}
        <Search />
        {/* End Search Box */}

        <div className="relative">
          {/* Avatar */}
          <img
            src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg"
            alt="avatar"
            className="
              h-[30px]
              ml-3
              rounded-full
              cursor-pointer
              hover:brightness-[80%]
            "
            onClick={handleToggleContextMenu}
          />
          {/* End Avatar */}

          {/* Context Menu */}
          <div
            className={`
              absolute
              right-0
              min-w-[136px]
              max-w-[240px]
              bg-[#282828]
              text-[color:var(--color-text)]
              rounded-xl
              p-[6px]
              ${
                (isContextMenuActive === true ? "block" : "hidden")
              }
            `}
          >
            <Link to="/setting" className={styleItemsContextMenu}>
              <IconSetting setColor="white" setWidth="16px" setHeight="16px" />
              <b className="pl-1">Setting</b>
            </Link>
            <Link to="/login" className={styleItemsContextMenu}>
              <IconLogin setColor="white" setWidth="16px" setHeight="16px" />
              <b className="pl-1">Login</b>
            </Link>
            <hr className="my-[4px] mx-[10px]" />
            <a href="https://github.com/phamhiep2506/music-player" className={styleItemsContextMenu} target="_blink">
              <IconGithub setColor="white" setWidth="16px" setHeight="16px" />
              <b className="pl-1">Github Repo</b>
            </a>
          </div>
          {/* Context Menu */}
        </div>
      </div>
      {/* End Right Part */}
    </nav>
  )
}

export default Navbar
