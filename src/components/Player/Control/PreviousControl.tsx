import React from "react"
import IconPrevious from "../../Icons/Previous"

const PreviousControl: React.FC = () => {
  return (
    <button className="mx-2 my-0 style__buttons" title="Previous Song">
      <IconPrevious setColor="white" setWidth="16px" setHeight="16px" />
    </button>
  )
}

export default PreviousControl