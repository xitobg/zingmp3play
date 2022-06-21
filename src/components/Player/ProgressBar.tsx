import React, { useEffect, useState } from "react"
import { formatTime } from "../../utils/formatTime"

interface a {
  c: number
  d: number
}

const ProgressBar:React.FC<a> = ({ c, d }) => {

  const [isActiveDotSlider, setActiveDotSlider] = useState<boolean>(false)
  const [isActiveTooltipSlider, setActiveTooltipSlider] = useState<boolean>(false)
  const [valueSlider, setValueSlider] = useState<number>(0)

  console.log((c/d) * 100)

  const handleActiveDotSlider = (handle: boolean) => {
    setActiveDotSlider(handle)
  }

  const handleActiveTooltipSlider = (handle: boolean) => {
    setActiveTooltipSlider(handle)
  }

  const handleChangeValueSlider = (event: any) => {
    setValueSlider(event.target.value)
  }

  return (
    // Progress Bar
    <div
      className="my-[-6px] w-full"
      onMouseOver={ () => { handleActiveDotSlider(true); handleActiveTooltipSlider(true) }}
      onMouseOut={ () => { handleActiveDotSlider(false); handleActiveTooltipSlider(false) }}
    >
      {/* Progress Bar Slider */}
      <div className="flex w-auto py-[6px] relative">
        <input
          className={ "player__slider w-full h-[2px] rounded-[5px] " + (isActiveDotSlider ? "player__slider--active" : "") }
          type="range"
          min="0"
          max="100"
          value={valueSlider}
          style={{
            background: `linear-gradient(90deg, var(--color-primary) ${(c/d) * 100}%, var(--color-player-slider) ${(c/d) * 100}%)`
          }}
          onChange={handleChangeValueSlider}
        />

        {/* Tooltip */}
        <div
          className={"absolute -top-8 -translate-x-2/4 " + (isActiveTooltipSlider ? "visible" : "invisible")}
          style={{
            left: `${(c/d) * 100}%`
          }}
        >
          <div className="text-sm font-medium whitespace-nowrap px-[6px] py-[2px] min-w-[20px] text-center text-[#000] rounded-[5px] bg-[#fff] box-content">
            <span>{formatTime(c)}</span>
          </div>
        </div>
        {/* End Tooltip */}
      </div>
      {/* End Progress Bar Slider */}

    </div>
    // End Progress Bar
  )
}

export default ProgressBar
