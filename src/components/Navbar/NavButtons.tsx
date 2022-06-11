import React from "react"
import IconArrowLeft from "../Icons/ArrowLeft"
import IconArrowRight from "../Icons/ArrowRight"

const NavButtons: React.FC = () => {
  const styleArrow = `
    p-2
    m-1
    hover:bg-[color:var(--color-secondary-bg-for-transparent)]
    rounded-md
    hover:duration-200
  `
  return (
    <div className="flex">
      <button className={styleArrow}>
        <IconArrowLeft setColor="white" setWidth="24" setHeight="24"/>
      </button>
      <button className={styleArrow}>
        <IconArrowRight setColor="white" setWidth="24px" setHeight="24px"/>
      </button>
    </div>
  )
}

export default NavButtons
