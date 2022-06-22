import React from "react"
import IconVolume from "../../Icons/Volume"
import IconVolumeMute from "../../Icons/VolumeMute"
import { useAppSelector, useAppDispatch } from "../../../hooks/redux"
import { changeIconVolume } from "../../../redux/features/audioSlice"

const VolumeControl: React.FC = () => {

  const isMute = useAppSelector((state) => state.audio.isMute)
  const dispatch = useAppDispatch()

  const handleMuteVolume = () => {
    isMute
    ? dispatch(changeIconVolume(false))
    : dispatch(changeIconVolume(true))
  }

  return (
    <div
      onClick={handleMuteVolume}
    >
      {
        isMute
        ?
          <button className="mx-2 my-0 style__buttons" title="Mute">
            <IconVolumeMute setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
          </button>
        :
          <button className="mx-2 my-0 style__buttons" title="Mute">
            <IconVolume setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
          </button>
      }
    </div>
  )
}

export default VolumeControl