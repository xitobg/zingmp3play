import React from "react"
import IconNext from "../../Icons/Next"

const NextControl: React.FC = () => {
  return (
    <button
      className="mx-2 my-0 style__buttons"
      title="Next Song"
    >
      <IconNext setColor="white" setWidth="16px" setHeight="16px" />
    </button>
  )
}

export default NextControl