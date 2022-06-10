import React from "react"
import IconSetting from "../Icons/Setting"
import IconLogin from "../Icons/Login"
import IconGithub from "../Icons/Github"

const ContextMenu: React.FunctionComponent = () => {

  const styleMenu = `
    flex
    items-center
    text-[color:var(--color-text)]
    px-1
    py-1
    bg-[red]
    mb-[2px]
    mx-1
    my-1
    rounded-lg
  `

  return (
    <div
      className="
        top-0
        right-0
        mr-[5vw]
        mt-[3vw]
        bg-[blue]
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
