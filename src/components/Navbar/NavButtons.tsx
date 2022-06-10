import React from "react"
import IconArrowLeft from "../Icons/ArrowLeft"
import IconArrowRight from "../Icons/ArrowRight"

const NavButtons: React.FunctionComponent = () => {
  return (
    <div className="flex">
      {/* arrow-nav-button__left-right => ../../index.css */}
      <button className="arrow-nav-button__left-right">
        <IconArrowLeft setColor="white" setWidth="24" setHeight="24"/>
      </button>
      <button className="arrow-nav-button__left-right">
        <IconArrowRight setColor="white" setWidth="24px" setHeight="24px"/>
      </button>
    </div>
  )
}

export default NavButtons
