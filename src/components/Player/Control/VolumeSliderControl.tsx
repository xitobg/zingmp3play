import React from "react"
import Slider from "../Slider"

const VolumeSliderControl: React.FC = () => {
  return(
    <Slider
      setWidth={"84px"}
      setHeight={"4px"}
      percentSlider={23}
      toogleTooltip={false}
      getPercentSlider={(value: number) => {
        // if(auRef) {
        //   localStorage.setItem("zing-volume", String(value / 100))
        //   setValueVolumeSlider(value)
        //   auRef.volume = value / 100
        // }
      }}
    />
  )
}

export default VolumeSliderControl