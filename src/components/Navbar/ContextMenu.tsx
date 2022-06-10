import React from "react"
import IconSetting from "../Icons/Setting"
import IconLogin from "../Icons/Login"
import IconGithub from "../Icons/Github"

const ContextMenu: React.FC = () => {

  const styleMenu = `
    flex
  `

  return (
    <div
      className="
        fixed
        top-0
        left-0
        min-w-[139px]
        min-h-[134px]
        bg-[rgba(255, 255, 255, 0.88)]
      "
    >
      <div className={styleMenu}>
        <IconSetting setColor="white" setWidth="18px" setHeight="18px" />
        <b className="pl-1">Setting</b>
      </div>
      <div className={styleMenu}>
        <IconLogin setColor="white" setWidth="18px" setHeight="18px" />
        <b className="pl-1">Login</b>
      </div>
      <hr />
      <div className={styleMenu}>
        <IconGithub setColor="white" setWidth="18px" setHeight="18px" />
        <b className="pl-1">Github Repo</b>
      </div>
    </div>
  )
}

export default ContextMenu
