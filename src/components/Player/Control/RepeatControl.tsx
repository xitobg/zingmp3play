import React from "react"
import IconRepeat from "../../Icons/Repeat"

const RepeatControl: React.FC = () => {
  return(
    <button className="mx-2 my-0 style__buttons" title="Repeat">
      <IconRepeat setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
    </button>
  )
}

export default RepeatControl