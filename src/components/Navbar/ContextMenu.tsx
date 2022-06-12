import React from "react"
import IconSetting from "../Icons/Setting"
import IconLogin from "../Icons/Login"
import IconGithub from "../Icons/Github"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { rootState } from "../../utils/interface"

const ContextMenu: React.FC = () => {

  const isActive = useSelector((state: rootState) => {
    return state.toogleContextMenu.isActive
  })

  const styleLinks = `
    flex
    items-center
    font-semibold
    px-[5px]
    py-[8px]
    rounded-[8px]
    hover:bg-[color:var(--color-primary-bg-for-transparent)]
    hover:duration-200
  `

  return (
    <div
      className={`
          fixed
          top-[50px]
          right-[140px]
          min-w-[139px]
          min-h-[134px]
          text-[color:var(--color-text)]
          shadow-[0_6px_12px_-4px_rgba(0,0,0,0.08)]
          backdrop-blur-md
          border-solid
          border-[rgba(0,0,0,0.06)]
          rounded-xl
          box-border
          p-[6px]
          indent-[1000]
          ${
            (isActive === false ? "hidden" : "block")
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
