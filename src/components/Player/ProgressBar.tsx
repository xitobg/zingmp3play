import React, { useState } from "react"

const ProgressBar:React.FC = () => {

  const [isActiveDotSlider, setActiveDotSlider] = useState<boolean>(false)
  const [valueSlider, setValueSlider] = useState<number>(0)

  const handleActiveDotSlider = (handle: boolean) => {
    setActiveDotSlider(handle)
  }

  const handleChangeValueSlider = (event: any) => {
    setValueSlider(event.target.value)
  }

  return (
    // Progress Bar
    <div
      className="my-[-6px] w-full"
      onMouseOver={() => handleActiveDotSlider(true)}
      onMouseOut={() => handleActiveDotSlider(false)}
    >
      {/* Progress Bar Slider */}
      <div
        className="flex w-auto py-[6px]"
      >
        <input
          className={ "player__slider w-full h-[2px] rounded-[5px] " + (isActiveDotSlider ? "player__slider--active" : "") }
          type="range"
          min="0"
          max="100"
          value={valueSlider}
          style={{
            background: `linear-gradient(90deg, var(--color-primary) ${valueSlider}%, var(--color-player-slider) ${valueSlider}%)`
          }}
          onChange={handleChangeValueSlider}
        />
      </div>
      {/* End Progress Bar Slider */}
    </div>
    // End Progress Bar
  )
}

export default ProgressBar
