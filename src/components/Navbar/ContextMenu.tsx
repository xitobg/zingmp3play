import React, { useContext } from "react"
import IconSetting from "../Icons/Setting"
import IconLogin from "../Icons/Login"
import IconGithub from "../Icons/Github"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { rootState } from "../../utils/types"
import { setContextMenu } from "./NavAvatar"

const ContextMenu: React.FC = () => {
  // redux store toogleContextMenu
  const isActive = useSelector((state: rootState) => {
    return state.toogleContextMenu.isActive
  })
  const logContextMenu = useContext(setContextMenu)

  // style item link
  const styleLinks = `
    flex
    items-center
    font-semibold
    px-[5px]
    py-[8px]
    rounded-[8px]
    hover:bg-[color:var(--color-primary-bg-for-transparent)]
    transition-all
    duration-300
  `

  return (
    <div
      style={{
        top: (logContextMenu.height + 10),
        left: (logContextMenu.width - 120)
      }}
      className={`
          fixed
          min-w-[136px]
          max-w-[240px]
          bg-[color:var(--color-body-bg)]
          text-[color:var(--color-text)]
          rounded-xl
          backdrop-blur-md
          box-border
          shadow-md
          shadow-[rgba(255,255,255,0.2)]
          p-[6px]
          z-[1000]
          ${
            (isActive === false ? "opacity-0" : "opacity-95")
          }
        `
      }
    >
      <Link to="/setting" className={styleLinks}>
        <IconSetting setColor="white" setWidth="16px" setHeight="16px" />
        <b className="pl-1">Setting</b>
      </Link>
      <Link to="/login" className={styleLinks}>
        <IconLogin setColor="white" setWidth="16px" setHeight="16px" />
        <b className="pl-1">Login</b>
      </Link>
      <hr className="my-[4px] mx-[10px]" />
      <a href="https://github.com/phamhiep2506/music-player" className={styleLinks} target="_blink">
        <IconGithub setColor="white" setWidth="16px" setHeight="16px" />
        <b className="pl-1">Github Repo</b>
      </a>
    </div>
  )
}

export default ContextMenu
