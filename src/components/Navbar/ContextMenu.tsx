import React from "react"
import IconSetting from "../Icons/Setting"
import IconLogin from "../Icons/Login"
import IconGithub from "../Icons/Github"

interface activeProps {
  isActive: boolean
}

const ContextMenu: React.FC<activeProps> = ({ isActive = "false" }) => {

  const styleMenu = `
    flex
    items-center
    font-semibold
    px-[5px]
    py-[8px]
    rounded-[8px]
    cursor-pointer
    hover:bg-[color:var(--color-primary-bg-for-transparent)]
  `

  return (
    <div
      className={
        `
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
        ` +
        (isActive === false ? "hidden" : "block")
      }
    >
      <div className={styleMenu}>
        <IconSetting setColor="white" setWidth="18px" setHeight="18px" />
        <b className="pl-1">Setting</b>
      </div>
      <div className={styleMenu}>
        <IconLogin setColor="white" setWidth="18px" setHeight="18px" />
        <b className="pl-1">Login</b>
      </div>
      <hr className="my-[4px] mx-[10px]" />
      <div className={styleMenu}>
        <IconGithub setColor="white" setWidth="18px" setHeight="18px" />
        <b className="pl-1">Github Repo</b>
      </div>
    </div>
  )
}

export default ContextMenu
