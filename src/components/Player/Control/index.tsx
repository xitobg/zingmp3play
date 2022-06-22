import React from "react"
import LyricControl from "./LyricControl"
import NextControl from "./NextControl"
import PlayControl from "./PlayControl"
import PreviousControl from "./PreviousControl"
import RepeatControl from "./RepeatControl"
import ShuffleControl from "./ShuffleControl"
import TrackInfo from "./TrackInfo"
import VolumeControl from "./VolumeControl"
import VolumeSliderControl from "./VolumeSliderControl"
import SongSliderControl from "./SongSliderControl"

const Control:React.FC = () => {

  return (
    <>
      <SongSliderControl />

      <div className="grid grid-cols-3 h-full mx-[10vw] z-[-1]">
        {/* Track Info */}
        <TrackInfo />
        {/* End Track Info */}

        {/* Mid Controls Button */}
        <div className="flex justify-center items-center">
          <PreviousControl />
          <PlayControl />
          <NextControl />
        </div>
        {/* End Mid Controls Button */}

        {/* Right Controls Button */}
        <div className="flex justify-center items-center">
          <LyricControl />
          <RepeatControl />
          <ShuffleControl />
          <VolumeControl />
          <VolumeSliderControl />
        </div>
        {/* End Right Controls Button */}
      </div>
    </>
  )
}

export default Control
