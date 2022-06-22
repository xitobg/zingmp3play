import React from "react"
import Slider from "../Slider"

const SongSliderControl: React.FC = () => {
  return(
    <Slider
      setWidth={"100%"}
      setHeight={"2px"}
      percentSlider={23}
      toogleTooltip={true}
      currentTimeSongTooltip={100}
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

export default SongSliderControl